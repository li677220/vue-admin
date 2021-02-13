<template>
  <div>
    <el-dialog
      title="新增"
      :visible.sync="dialogVisible"
      width="45%"
      :before-close="dialogClose"
      :modal="false"
      @open="openDialog">
        <el-form label-position="right" label-width="80px" :model="addForm">
          <el-form-item label="用户名：">
            <el-input v-model="addForm.name" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input v-model="addForm.trueName" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="手机号：">
            <el-input v-model="addForm.phone" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="地区：">
            <CitySelect></CitySelect>
          </el-form-item>
          <el-form-item label="禁/启用：">
            <el-radio v-model="addForm.status" label="1">禁用</el-radio>
            <el-radio v-model="addForm.status" label="2">启用</el-radio>
          </el-form-item>
          <el-form-item label="角色：">
            <!-- <el-checkbox-group v-model="addForm.rule">
              <el-checkbox label="系统管理员"></el-checkbox>
              <el-checkbox label="信息管理员"></el-checkbox>
              <el-checkbox label="用户管理员"></el-checkbox>
            </el-checkbox-group> -->
          </el-form-item>
        </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    
  </div>
</template>

<script>
import { reactive, ref } from '@vue/composition-api'
import CitySelect from "@/components/CitySelect/index.vue"
export default {
components: { CitySelect },
setup(props,context){
  const addForm = reactive({

  })
  let dialogVisible = ref(false)
  const dialogClose = () => {
    dialogVisible.value = false
  }
  const openDialog = () => {
    dialogVisible.value = true
  }
  return{
    addForm,
    dialogVisible,
    dialogClose,openDialog
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