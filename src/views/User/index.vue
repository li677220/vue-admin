<template>
 <div id="userIndex">
   <el-row :gutter="16">
      <el-col :span="4">
        <label for="">
          <span class="label-value">关键字：</span>
          <!-- <el-select v-model="searchContent.selectValue" placeholder="请选择" style="width: 130px">
            <el-option
              v-for="item in options.item"
              :key="item.value"
              :label="item.lable"
              :value="item.value"
            ></el-option>
          </el-select> -->
          <SelectCmp :config="configOptions"/>
        </label>
      </el-col>
      <el-col :span="3">
        <el-input v-model="searchContent.keyWords" placeholder="请输入" style="width:130px"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
      <el-col :span="15">
        <el-button type="primary" icon="el-icon-plus" class="full-right">添加用户</el-button>
      </el-col>
    </el-row>
    <TableCmp :config="configTable"></TableCmp>
 </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
import SelectCmp from "@/components/Select/index.vue"
import TableCmp from "@/components/Table/index.vue" 
export default {
  name: "UserIndex",
  components: { SelectCmp, TableCmp },
  setup(props,{ root }){
    const configOptions = reactive({
      // 下拉框需要的内容
      options:["name","phone","email"]
    })
    const configTable = reactive({
      selection: true, //是否需要表格前面的多选框,默认为true
      tHead: [{
        label: "邮箱/用户名",
        field: "email",
        width: "180"
      }, {
        label: "姓名",
        field: "name",
        width: "180"
      }, {
        label: "手机号",
        field: "phone",
        width: "180"
      }, {
        label: "地址",
        field: "address",
        // width: "180"
      }, {
        label: "角色",
        field: "role",
        width: "180"
      }]
    })
    const searchContent = reactive({
      selectValue: "",
      keyWords: ""
    })
    const userForm = reactive({
      name: "",
      phone: "",
      address: "",
      email: ""
    })
    return{
      userForm,searchContent,configOptions,configTable
    }
  }
}
</script>

<style lang='scss' scoped>
#userIndex{
  font-size: 14px;
}
.el-row{
  margin: 0 0 15px !important;
}
 
</style>