<template>
  <div class="hl-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HlCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
