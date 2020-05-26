// 包入口文件，定义install方法，接受Vue作为参数，如果使用use注册插件则所有组件都被注册
import HlButton from './Button.vue'
import HlDialog from './Dialog.vue'
import HlInput from './Input.vue'
import HlSwitch from './Switch.vue'
import HlRadio from './Radio.vue'
import HlRadioGroup from './RadioGroup.vue'
import HlCheckbox from './CheckBox.vue'
import HlCheckboxGroup from './CheckboxGroup.vue'
import HlForm from './Form.vue'
import HlFromItem from './FormItem.vue'
import './font/iconfont.css'
const components = [
  HlButton,
  HlCheckbox,
  HlCheckboxGroup,
  HlCheckboxGroup,
  HlDialog,
  HlForm,
  HlFromItem,
  HlRadio,
  HlRadioGroup,
  HlSwitch,
  HlInput
]
const install = function (Vue) {
  // 全局注册
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}
export default {
  install
}
