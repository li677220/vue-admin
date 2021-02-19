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
        <el-button type="primary" icon="el-icon-plus" class="full-right" @click="addUser">添加用户</el-button>
      </el-col>
    </el-row>
    <TableCmp :config="configTable" ref="tableCmp">
      <template v-slot:status="slotData">
        <!--  active-value="2"(启用) inactive-value="1"(禁用)  -->
        <el-switch v-model="slotData.data.status" active-value="2" inactive-value="1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </template>
      <template v-slot:handle="slotData">
        <el-button size="mini" type="danger" @click="removeItem(slotData.data)">删除</el-button>
        <el-button size="mini" type="success" @click="editItem(slotData.data)">操作</el-button>
      </template>
      <!-- <template v-slot:batchRemove="slotData">
        <el-button size="small" @click="removeItem(slotData.data)">批量删除</el-button>
      </template> -->
    </TableCmp>
    <AddUserCmp ref="addUserDialog" @getUserList="getUserList"></AddUserCmp>
 </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
import SelectCmp from "@/components/Select/index.vue"
import TableCmp from "@/components/Table/index.vue"
import { DeleteUser } from "@/api/user.js" 
import AddUserCmp from "./dialog/add.vue"
export default {
  name: "UserIndex",
  components: { SelectCmp, TableCmp, AddUserCmp },
  setup(props,{ root, refs }){
    const configOptions = reactive({
      // 下拉框需要的内容
      options:["name","phone","email"]
    })
    const configTable = reactive({
      selection: true, //是否需要表格前面的多选框,默认为true
      tHead: [{
        label: "邮箱/用户名",
        field: "username",
        // field: "title",
        width: "160"
      }, {
        label: "姓名",
        field: "truename",
        width: "120"
      }, {
        label: "手机号",
        field: "phone",
        width: "180"
      }, {
        label: "地址",
        field: "region",
        // width: "180"
      }, {
        label: "角色",
        field: "role",
        width: "180"
      }, {
        label: "禁启用状态",
        field: "status",
        width: "120",
        columnType: "slot",
        slotName: "status"
      }, {
        label: "操作",
        field: "handle",
        width: "180",
        columnType: "slot",
        slotName: "handle"
      }],
      // requestUrl: "/user/getList/",
      //是否需要显示页码,默认为true
      pagination: true
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
    const getUserList = () => {
      refs['tableCmp'].getList()
    }
    const removeItem = (params) => {
      console.log(params);
      let reqData = {
        id: [params.id]
      }
      // console.log(refs['tableCmp']);
      // return false
      DeleteUser(reqData).then(res => {
        console.log(res);
        // 删除成功，更新数据
        getUserList()
      }).catch(err => {
        console.log(err);
      })
    }
    const editItem = (params) => {
      console.log(params);
    }
    const addUser = () => {
      refs.addUserDialog.openDialog()
    }
    return{
      userForm,configOptions,configTable,
      searchContent,removeItem,editItem,addUser,getUserList
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