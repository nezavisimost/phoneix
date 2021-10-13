<template>
  <div class="phoneix_box">
    <input v-if="is_format" type="text" class="phoneix_input placeholder" v-model="placeholder" :style="{'color': color_ph}" @focus="$refs.phoneix_input.focus()">
    <input type="tel" class="phoneix_input" ref="phoneix_input" value="+7 (" v-model="phone" @input="input" autofocus :style="{'color': color}" @select="onSelect" @selectionchange="onSelect" @focus="onFocus">
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
      is_format: true,
      history_position: 0,
      old_position: 4,
      selection_start: 4,
      selection_length: 0,
    }
  },
  computed: {
    placeholder: function () {
      return  this.phone + this.ideal.substr(this.phone.length)
    },
    onlyDigits: function (){
      return this.phone.replace( /\D+/g, '')
    },
    raw: function () {
      if (this.is_format){
        return this.phone.replace( /\D+/g, '')
      }
      else {
        return this.phone.replace( /[^\d()\- +]+/g, '')
      }
    },
    old: function () {
      return this.phone_history.slice(-1)[0]
    }
  },
  methods: {
    onSelect: function (e) {
      if (e.target.selectionStart < 4 && this.is_format) {
        e.target.selectionStart = this.selection_start = 4
      }
    },
    onFocus: function(e) {
      if (e.target.selectionStart < 4 && this.is_format) {
        e.target.selectionStart = this.selection_start = 4
      }
    },
    selectionReplace: function(source, start, length, repl) {
      return source.substr(0, start) + repl + source.substr(start+length)
    },

    input: function (e) {
      let start_pos = this.$refs.phoneix_input.selectionStart
      let adding = true
      let pos = start_pos

      // fix inputEvent.data (issue #2)
      let event = {data: e.data, input_type: e.inputType}
      if(["insertFromPaste"].includes(event.input_type)) {
        if (!event.data) {
          let paste_length = this.phone.length - this.old.length
          event.data = this.phone.substr(this.old_position, paste_length)
        }
      }

      if (!this.is_format && ['7'].includes(this.onlyDigits)){
        this.is_format = true
        event.data = ''
      }

      // типа ввод одного символа
      if (this.is_format){
        if(event.input_type === "insertText" || (["insertFromPaste"].includes(event.input_type)  && event.data.length === 1)) {
          // один адекватный символ
          if(!isNaN(event.data) && event.data !== " " && event.data.length === 1 && this.is_format) {
            if (this.phone === event.data) {
              this.phone = '+7 (' + event.data
              pos = 5
            }
            else if (this.$refs.phoneix_input.selectionStart < 5) {
              this.phone = this.old.substr(0, 4) + event.data + this.old.substr(4)
              pos = 5
            }
            if (this.selection_length) {
              this.selectionReplace(this.phone, this.selection_start, this.selection_length, event.data)
            }
            pos = this.transform_position(pos) // найдём правильную позицию курсора, если ввод осуществялся в центр
          }
          else if(isNaN(event.data) && event.data.length === 1 || event.data === " ") {
            pos = this.transform_position(pos)
            if (pos !== this.phone.length && ![8,10,13,16].includes(pos)) {
              pos -= 1
              this.phone = this.old
            }
          }
        }

        // вставка из буфера обмена
        else if(["insertFromPaste"].includes(event.input_type)) {
          // получаем только цифры из всей пасты
          let clear = event.data.replace( /\D+/g, '')
          // если все цифры образуют номер телфона
          if(/[78]?[0-9]{10}/gm.test(clear)){ // TODO: надо как-то научить вставлять в регулярку значение this.base
            // убираем восьмёрку из начала
            this.phone = ["7", "8"].includes(clear.substr(0, 1)) ? this.base + clear.substr(1) : clear
          }
          // иначе если паста соответствует хотя бы частично формату номера телефона
          else if(/[0-9()\- ]{1,10}/gm.test(clear)) {
            this.phone = this.old
            // Пытаемся добавить номер телефона к имеющемуся
            this.phone = this.selectionReplace(this.phone, this.selection_start, this.selection_length, clear)
          }
        }

        // на стирание
        else if(event.input_type === "deleteContentBackward") {
          // let delta = this.old.length - this.phone.length
          if ([7, 8].includes(pos)) {
            this.phone = this.formatted_phone({raw: this.raw.substr(0, 3) + this.raw.substr(4)})
            pos = 7
          }
          else if (pos === 12) {
            this.phone = this.formatted_phone({raw: this.raw.substr(0, 6) + this.raw.substr(7)})
            pos = 12
          }
          else if (pos === 15) {
            this.phone = this.formatted_phone({raw: this.raw.substr(0, 8) + this.raw.substr(9)})
            pos = 15
          }
          if (pos === 0 && this.raw.length <= 1) {
            pos = 4
          }
          if (pos < 4) {
            this.is_format = false
            this.phone = '+'
            pos = 4
          }
          adding = false
          pos = this.transform_position(pos, adding)
        }
        else if (["deleteByDrag", "insertFromDrop"].includes(event.input_type)) {
          this.phone = this.old
          pos = this.phone.length
        }
      }

      if(event.input_type === "historyUndo") {
        this.history_position -= 1
        this.phone = this.phone_history[this.history_position]
      }
      else if(event.input_type === "historyRedo") {
        this.history_position += 1
        this.phone_history = this.phone_history[this.history_position + 1]
      }
      else {
        this.$nextTick(() => {  // fix jump caret to end
          if (this.is_format) {
            this.$refs.phoneix_input.setSelectionRange(pos, pos)
          }
          else{
            this.$refs.phoneix_input.setSelectionRange(start_pos, start_pos)
          }
        })
        this.phone = this.formatted_phone({"adding": adding, "position": pos})
        this.old_position = pos
        this.phone_history.slice(0, this.history_position)
        this.phone_history.push(this.phone)
        this.history_position = this.phone_history.length - 1
      }
    },
    transform_position: function (position, adding=true){
      if (adding) {
        if(position === 7){return 9}
        else if(position === 8){return 10}
        else if(position === 9){return  10}

        if(position === 12){return  13}
        else if(position === 13 && this.phone.substr(-1) !== "-"){return  14}

        if(position === 15){return 16}
        else if(position === 16 && this.phone.substr(-1) !== "-"){return 17}

        return position
      }
      else {
        if(position === 8){return 7}

        else if(position === 13 && this.phone.substr(-1) !== "-"){return  12}

        return position
      }
    },
    formatted_phone: function ({adding=true, raw=false, position=20} = {}) {
      raw = raw ? raw : this.raw // если не передано, то преобразуем this.phone'овское значение через его чистое представление

      if (this.is_format) {
        let f3 = raw.substr(1, 3) // Первые три цифры -- (999)
        let s3 = raw.substr(4, 3) // Вторые три цифры
        let f2 = raw.substr(7, 2) // Первые две цифры из последнего блока из четырёх цифр
        let s2 = raw.substr(9, 2) // Вторые две цифры

        let normal = `+${this.base} (`

        if(f3.length) normal = `+${this.base} (${f3}${adding && f3.length === 3 && this.phone.length < position + 1 ? ") " : ""}`
        if(s3.length) normal = `+${this.base} (${f3}) ${s3}${adding && s3.length === 3 && this.phone.length < position ? "-" : ""}`
        if(f2.length) normal = `+${this.base} (${f3}) ${s3}-${f2}${adding && f2.length === 2 && this.phone.length < position ? "-" : ""}`
        if(s2.length) normal = `+${this.base} (${f3}) ${s3}-${f2}-${s2}`

        return normal
      }
      return raw
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
  width: 9em;
  font-weight: inherit;
}
.phoneix_input.placeholder {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
