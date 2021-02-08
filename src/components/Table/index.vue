<template>
  <el-table :data="data.tableData" border style="width: 100%">
    <el-table-column type="selection" width="55" v-if="data.configTable.selection"></el-table-column>
    <template v-for="(item,i) in data.configTable.tHead">
      <el-table-column :key="i" v-if="item.columnType === 'slot'" :prop="item.field" :label="item.label" :width="item.width">
        <template v-slot="scope">
          <slot :name="item.slotName" :data="scope.row"></slot>
        </template>
      </el-table-column>  
      <el-table-column :key="i" :prop="item.field" :label="item.label" :width="item.width" v-else></el-table-column>  
    </template>
  </el-table>
</template>
<script>
import { onBeforeMount, reactive, watch, watchEffect } from '@vue/composition-api'
import { GetUserList } from "@/api/user.js"
import { loadData } from "./loadData"
export default {
props: {
  config: {
    type: Object,
    default: () => {}
  }
},
setup (props,context) {
  const { tableData, loadingData } = loadData()
  loadingData()
  console.log(tableData);
  const data = reactive({
    tableData: [{
      email: "li888@163.com",
      phone: '20160502',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      role: "admin",
      status: true,
    }],
    configTable: {
      selection: false,
      requestUrl: "",
      tHead: []
    }
  })
  // 监听表格数据
  watchEffect(() => {
    data.tableData = tableData.item
  })
  //监听父组件传入的表头数据
  watch(() => props.config, value => data.configTable = value,{
    immediate: true //初次加载时是否监听（绑定时加载）
  })
  onBeforeMount(() => {
    // loadData()
  })
  return {
    data
  }
},
}
</script>

<style lang='scss' scoped>

 
</style>
