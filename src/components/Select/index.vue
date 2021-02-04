<template>
  <el-select v-model="options.selectValue" placeholder="请选择" style="width: 130px">
    <el-option
      v-for="item in options.initOptions"
      :key="item.value"
      :label="item.lable"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script>
import { onMounted, reactive } from '@vue/composition-api'
export default {
props: {
  config: {
    type: Object,
    default: () => {}
  }
},
setup(props,context){
  const options = reactive({
    selectValue: "",
    item: [
      {value: "name", lable: "姓名"},
      {value: "phone", lable: "手机号"},
      {value: "email", lable: "邮箱"},
      {value: "id", lable: "ID"},
      {value: "title", lable: "标题"},
    ],
    initOptions: []
  })
  // 初始化下拉框
  const initSelect = () => {
    // 不能直接在循环中修改options.item,每一次修改都会渲染一次页面
    // 声明一个变量暂时保存需要的内容，等内容过滤完成之后，一次赋值给options.item
    let optionArr = []
    props.config.options.forEach(item1 => {
      let data = options.item.filter(item2 => item2.value == item1)[0]
      optionArr.push(data)
    })
    options.initOptions = optionArr
    options.selectValue = options.initOptions[0].value
  }
  onMounted(() => {
    initSelect()
  })
  return{
    options
  }
}
}
</script>

<style lang='scss' scoped>

 
</style>
