<template>
  <div>
    <el-dialog
      title="新增"
      :visible.sync="dialogVisible"
      width="45%"
      :before-close="dialogClose"
      :modal="false">
        <el-form label-position="right" label-width="80px" :model="addForm">
          <el-form-item label="用户名：">
            <el-input v-model="addForm.username" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input type="password" v-model="addForm.password" placeholder="请输入密码(6-20位数字+密码)"></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input v-model="addForm.truename" placeholder="请输入真实姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号：">
            <el-input v-model.number="addForm.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="地区：">
            <CitySelect ref="citySelect"></CitySelect>
          </el-form-item>
          <el-form-item label="禁/启用：">
            <el-radio v-model="addForm.status" label="1">禁用</el-radio>
            <el-radio v-model="addForm.status" label="2">启用</el-radio>
          </el-form-item>
          <el-form-item label="角色：">
            <el-checkbox-group v-model="addForm.role">
              <el-checkbox v-for="(item,i) in checkboxList.item" :label="item.role" :key="i">{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/composition-api'
import CitySelect from "@/components/CitySelect/index.vue"
import { GetRole, AddUser } from "@/api/user.js"
export default {
components: { CitySelect },
setup(props,context){
  const addForm = reactive({
    username: '',
    truename: '',
    password: '',
    phone: '',
    region: null,
    status: '2',
    role: [],
    btnPerm: ''
  })
  const checkboxList = reactive({
    item: []
  })
  let dialogVisible = ref(false)
  const getRole = () => {
    GetRole({}).then(res => {
      checkboxList.item = res.data.data
    }).catch(err => {
      console.log(err);
    })
  }
  const dialogClose = () => {
    dialogVisible.value = false
  }
  const openDialog = () => {
    dialogVisible.value = true
    getRole()
  }
  // 提交表单前 将表单数据格式化为所需的格式
  const formatAddform = () => {
    addForm.region = JSON.stringify(context.refs['citySelect'].getAddress())
  }
  const addUser = () => {
    // dialogVisible.value = false
    formatAddform()
    //浅拷贝导致下一次多选框无法正常使用
    // Object.assign({}, addForm) 在没有二级属性时可以实现深拷贝
    // JSON.parse(JSON.stringify(addForm)) 当属性中含有函数、undefined、Symbol时,属性会丢失
    let reqData = JSON.parse(JSON.stringify(addForm))
    reqData.role = reqData.role.toString()
    AddUser(reqData).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
    console.log(addForm);
    // console.log(JSON.stringify(context.refs['citySelect'].getAddress()));
  }
  return{
    addForm,checkboxList,
    dialogVisible,
    dialogClose,openDialog,addUser
  }
}
}
</script>

<style lang='scss' scoped>
.el-dialog__header{
  padding-bottom: 0 !important;
}
.el-form-item{
  margin: 15px 15px;
}
.el-row{
  margin: 0 !important;
}
// .el-row > .el-col:first-child{
//   padding-left: 0 !important;
// }
// .el-row > .el-col:last-child{
//   padding-right: 0 !important;
// }
</style>
<style lang="scss">
  
</style>