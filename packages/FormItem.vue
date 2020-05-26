<template>
  <div class="hl-form-item">
    <label class="hl-form-item_label" :style="{width:this.Form.labelWidth}">{{label}}</label>
    <div class="hl-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HlFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form']
}
</script>

<style lang="scss" scoped>
 .hl-form-item{
    margin-bottom: 25px;
    .hl-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .hl-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidden;
    }
  }
</style>
