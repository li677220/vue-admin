<template>
  <el-table :data="data.tableData" border style="width: 100%">
    <el-table-column type="selection" width="55" v-if="data.configTable.selection"></el-table-column>
    <el-table-column v-for="(item,i) in data.configTable.tHead" :key="i" :prop="item.field" :label="item.label" :width="item.width"></el-table-column>
  </el-table>
</template>
<script>
import { reactive, watch } from '@vue/composition-api'
export default {
props: {
  config: {
    type: Object,
    default: () => {}
  }
},
setup (props,context) {
  const data = reactive({
    tableData: [{
      email: "li888@163.com",
      phone: '20160502',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      role: "admin"
    }, {
      email: "li888@163.com",
      phone: '20160502',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      role: "admin"
    }],
    configTable: {
      selection: true,
      tHead: []
    }
  })
  // data.configTable = props.config
  watch(() => props.config,value => {
    data.configTable = value
  },{
    immediate: true //初次加载时是否监听（绑定时加载）
  })
  return {
    data
  }
},
}
</script>

<style lang='scss' scoped>

 
</style>
