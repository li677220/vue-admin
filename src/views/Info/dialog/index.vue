<template>
 <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="37%" :before-close="dialogClose">
        <el-form label-width="80px" :model="formLabelAlign">
          <el-form-item label="类型：">
            <el-select v-model="formLabelAlign.type" placeholder="请选择" style="eidth: 30%">
              <el-option
                v-for="item in formLabelAlign.type"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标题：">
            <el-input v-model="formLabelAlign.title" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="概况：">
            <el-input type="textarea" :rows="5" placeholder="请输入内容"
            resize="none" v-model="formLabelAlign.survey"></el-input>
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
import { reactive, ref } from "@vue/composition-api"
export default {
  setup(props,context){
    const formLabelAlign = reactive({
      type: [],
      title: '',
      survey: ''
    })
    let dialogVisible = ref(false)
    const dialogClose = () => {
      dialogVisible.value = false
    }
    const openDialog = () => {
      dialogVisible.value = true
    }
    return{
      formLabelAlign,
      dialogVisible,
      dialogClose,openDialog
    }
  }

  // data() {
  //     return {
  //       dialogVisible: false,
  //       formLabelAlign: {
  //         type: [],
  //         title: '',
  //         survey: ''
  //       }
  //     };
  //   },
  // methods: {
  //   dialogClose() {
  //     this.dialogVisible = false
  //   },
  //   openDialog(){
  //     this.dialogVisible = true
  //   }
  // }
}
</script>

<style lang='scss'>
.v-modal{
  visibility: hidden;
}
.el-dialog__footer{
  text-align: center;
  padding: 0 20px 35px !important;
  button{
    width: 120px;
  }
}
 
</style>
