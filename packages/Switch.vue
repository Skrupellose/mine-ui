<template>
  <div class="hl-switch" :class="{'is-checked':value}" @click="changeValue">
    <span class="hl-switch_core" ref="core">
      <span class="hl-switch_button"></span>
    </span>
    <input class="hl-switch_input" type="checkbox" ref="input" :name="name">
  </div>
</template>

<script>
export default {
  name: 'HlSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
  },
  methods: {
    async changeValue () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.inactiveColor || this.activeColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hl-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .hl-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .hl-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .hl-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.hl-switch.is-checked {
  .hl-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .hl-switch_button {
      transform: translateX(20px);
    }
  }
}
</style>
