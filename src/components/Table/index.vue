<template>
<div>
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
  <el-pagination
    v-if="data.configTable.pagination"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pageData.currentPage"
    :page-sizes="pageData.pageSizes"
    :page-size="pageData.pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="pageData.total" background>
  </el-pagination>
</div>
</template>
<script>
import { reactive, watch, watchEffect } from '@vue/composition-api'
import { loadData } from "./loadData"
import { pagination } from "./pagination"
export default {
props: {
  config: {
    type: Object,
    default: () => {}
  }
},
setup (props,context) {
  const { tableData, loadingData } = loadData()
  const { pageData, handleSizeChange, handleCurrentChange } = pagination()
  // 初始加载10条数据
  loadingData({
    pageNumber:1,
    pageSize:10
  })
  const data = reactive({
    tableData: [],
    configTable: {
      selection: true,
      // requestUrl: "",
      tHead: [],
      pagination: true
    }
  })
  // 监听表格数据
  watchEffect(() => {
    // 更新页码
    pageData.total = tableData.total
  })
  //监听父组件传入的表头数据
  watch([
    () => props.config,
    () => tableData.item
    ], ([config,item]) => {
      data.configTable = config //更新表头
      data.tableData = item //更新数据
    },{
    immediate: true //初次加载时是否监听（绑定时加载）
  })
  return {
    data, pageData,
    handleSizeChange, handleCurrentChange
  }
},
}
</script>

<style lang='scss' scoped>
.el-pagination{
  padding-right: 0;
  float: right;
}
 
</style>
