<template>
  <div class="hl-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HlForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
