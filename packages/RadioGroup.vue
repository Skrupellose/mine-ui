<template>
  <div class="hl-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HlRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style lang="scss" scoped>

</style>
