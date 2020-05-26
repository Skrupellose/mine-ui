<template>
  <div class="hl-input" :class="{'hl-input--suffix': showSuffix}">
    <input
      class="hl-input_inner"
      :class="{'is-disabled':disabled}"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'password' : 'text') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      :clearable="clearable"
      :showPassword="showPassword"
      @input="handleInput"
    >
    <span class="hl-input_suffix"  v-if="showSuffix">
      <i class="icon-chuangzuo" v-if="clearable && value" @click="clear"></i>
      <i class="icon-caidan" :class="{'i-active' : passwordVisible}" v-if="showPassword" @click="changeType"></i>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      passwordVisible: false
    }
  },
  name: 'HlInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入...'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    changeType () {
      this.passwordVisible = !this.passwordVisible
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  }
}
</script>

<style lang="scss" scoped>
.hl-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .hl-input_inner {
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.hl-input--suffix {
  .hl-input_inner {
    padding-right: 30px;
  }
  .hl-input_suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .i-active {
      color: red;
    }
  }
}
</style>
