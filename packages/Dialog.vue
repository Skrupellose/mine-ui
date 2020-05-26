<template>
  <transition name="dialog-fade">
  <div class="hl-dialog_wrapper" v-show="visible" @click.self=handleclose>
    <div class="hl-dialog" :style="{width,marginTop: top}">
      <div class="hl-dialog_header">
        <slot name="title">
          <span class="hl-dialog_title">{{title}}</span>
        </slot>
        <button class="hl-dialog_headerbtn" @click=handleclose><i class="icon-qingchu"></i></button>
      </div>
      <div class="hl-dialog_body">
        <slot></slot>
      </div>
      <div class="hl-dialog_footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'HlDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleclose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.hl-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);
  .hl-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .hl-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .hl-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .hl-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: dialog-fade-in .4s;
}
.dialog-fade-leave-active {
  animation: dialog-fade-out .4s;
}
@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
