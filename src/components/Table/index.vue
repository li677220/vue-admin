<template>
<div>
  <el-table :data="data.tableData" border style="width: 100%" @selection-change="handleSelectionChange">
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
  <div class="footer">
    <el-button size="mini" @click="batchRemove()" class="full-left">批量删除</el-button>
    <!-- <template v-slot="scope">
      <slot :name="item.slotName" :data="scope.row"></slot>
    </template> -->
    <el-pagination
      v-if="data.configTable.pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageData.currentPage"
      :page-sizes="pageData.pageSizes"
      :page-size="pageData.pageSize"
      class="full-right"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.total" background>
    </el-pagination>
  </div>
  
</div>
</template>
<script>
import { onMounted, reactive, watch, watchEffect } from '@vue/composition-api'
import { loadData } from "./loadData"
import { pagination } from "./pagination"
import { DeleteUser } from "@/api/user.js"
import { global } from "@/utils/globalv3.js"
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
  const { removeTips } = global();
  // 初始加载10条数据
  
  const data = reactive({
    tableData: [],
    configTable: {
      selection: true,
      // requestUrl: "",
      tHead: [],
      pagination: true
    }
  })
  let selectData = reactive({
    // 选中数据的id
    item: []
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
  const batchRemove = () => {
    if(selectData.item.length == 0){
      context.root.$message({
        message: "未选中任何内容",
        type: "warning"
      })
      return false
    }
    removeTips({
      value: "确认删除当前信息",
      fn: confirm
    })
  }
  const confirm = () => {
    let removeIds = []
    // selectData.item.forEach(item => {
    //   removeIds.push(item.id)
    // })
    removeIds = selectData.item.map(item => item.id)
    let reqData = {
      id: removeIds 
    }
    DeleteUser(reqData).then(res => {
      console.log("删除成功");
      getList()
    }).catch(err => {
      console.log(err);
    })
  }
  const handleSelectionChange = (val) => {
    selectData.item = val
  }
  const getList = () => {
    loadingData({
      pageNumber:1,
      pageSize:10
    })
  }
  onMounted(() => {
    getList()
  })
  return {
    data, pageData,
    handleSizeChange, handleCurrentChange,batchRemove,handleSelectionChange,getList
  }
},
}
</script>

<style lang='scss' scoped>
.el-pagination{
  padding-right: 0;
}
.footer{
  margin-top: 15px;
}
</style>
