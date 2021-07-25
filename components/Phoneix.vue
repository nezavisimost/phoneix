<template>
  <div class="phoneix_box">
    <input type="text" class="phoneix_input placeholder" value="+7 (000) 000-00-00" :style="{'color': color_ph}">
    <input type="tel" class="phoneix_input" value="+7 (" autofocus :style="{'color': color}">
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
