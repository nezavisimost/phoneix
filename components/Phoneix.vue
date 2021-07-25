<template>
  <div class="phoneix_box">
    <input type="text" class="phoneix_input placeholder" v-model="placeholder" :style="{'color': color_ph}" @focus="$refs.phoneix_input.focus()">
    <input type="tel" class="phoneix_input" ref="phoneix_input" value="+7 (" v-model="phone" @input="input" autofocus :style="{'color': color}">
  </div>
</template>

<script>
export default {
  name: "Phoneix",
  props: {
    value: String,
    color: {
      type: String,
      default: '#e7e7e7'
    },
    color_ph: {
      type: String,
      default: '#595959'
    },
    base: {
      type: String,
      default: '7'
    }
  },
  data() {
    return {
      phone: `+${this.base} (`,
      ideal: `+${this.base} (000) 000-00-00`,
      phone_history: [`+${this.base} (`],
      history_position: 0,
      old_position: 4,
    }
  },
  methods: {
    input: function (e) {
      let pos = this.$refs.phoneix_input.selectionStart

      // fix inputEvent.data (issue #2)
      let event = {data: e.data, inputType: e.inputType}
      if(event.inputType === "insertFromPaste") {
        if (!event.data) {
          let pasteLength = this.phone.length - this.old.length
          event.data = this.phone.substr(this.old_position, pasteLength)
        }
      }

      this.phone = this.formatted_phone()
      this.phone_history.push(this.phone)
      this.history_position += 1
    },
    formatted_phone: function (adding=true) {
      let f3 = this.raw.substr(1, 3) // Первые три цифры -- (999)
      let s3 = this.raw.substr(4, 3) // Вторые три цифры
      let f2 = this.raw.substr(7, 2) // Первые две цифры из последнего блока из четырёх цифр
      let s2 = this.raw.substr(9, 2) // Вторые две цифры

      let normal = `+${this.base} (`

      if(f3.length) normal = `+${this.base} (${f3}${adding && f3.length === 3 ? ") " : ""}`
      if(s3.length) normal = `+${this.base} (${f3}) ${s3}${adding && s3.length === 3 ? "-" : ""}`
      if(f2.length) normal = `+${this.base} (${f3}) ${s3}-${f2}${adding && f2.length === 2 ? "-" : ""}`
      if(s2.length) normal = `+${this.base} (${f3}) ${s3}-${f2}-${s2}`

      return normal
    }
  },
  computed: {
    placeholder: function () {
      return  this.phone + this.ideal.substr(this.phone.length)
    },
    raw: function () {
      return this.phone.replace( /\D+/g, '')
    },
    old: function () {
      return this.phone_history[-1]
    }
  }
}
</script>

<style scoped>
.phoneix_box {
  position: relative;
}
.phoneix_input {
  position: relative;
  background: transparent;
  font-size: 1em;
  text-align: left;
  border: none;
  outline: none;
  width: 10em;
  font-weight: inherit;
}
.phoneix_input.placeholder {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
