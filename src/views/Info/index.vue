<template>
  <div id="infoIndex">
    <el-row :gutter="20">
      <el-col :span="4">
        <label for="">
          <span class="label-value">类型:</span>
          <el-select v-model="typeValue" placeholder="请选择" style="max-width: 120px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </label>
      </el-col>
      <el-col :span="7">
        <label for="">
          <span class="label-value">日期:</span>
            <el-date-picker
              v-model="dateValue"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="max-width: 270px"
            >
            </el-date-picker>
        </label>
      </el-col>
      <el-col :span="7">
        <label for="">
          <span class="label-value">关键字:</span>
          <el-select v-model="keyValue" placeholder="请选择" style="max-width: 120px">
            <el-option
              v-for="item in keyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input v-model="inputValue" placeholder="请输入"
          class="full-right" style="max-width: 140px"></el-input>
        </label>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" class="full-left" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" class="full-right" icon="el-icon-plus" @click="addNews">新增</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="标题" ></el-table-column>
      <el-table-column prop="name" label="类别" width="130"></el-table-column>
      <el-table-column prop="address" label="日期" width="240"></el-table-column>
      <el-table-column prop="manager" label="管理人" width="115"></el-table-column>
      <el-table-column prop="operation" label="操作" width="150">
        <template :slot-scope="scope">
          <el-button type="danger" size="mini" @click="removeNews">删除</el-button>
          <el-button type="success" size="mini" @click="editNews">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row :gutter="10" class="page-foot">
      <el-col :span="2" class="full-left batch">
        <el-button size="mini" @click="removeAllNews">批量删除</el-button>
      </el-col>
      <el-col :span="14" class="full-right paging">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[100, 200, 300, 400]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
      </el-col>
    </el-row>
    <!-- 新增弹窗 -->
    <dialogInfo ref="dialog"></dialogInfo>
  </div>
</template>

<script>
import { global } from "@/utils/globalv3.js"
import { reactive, ref } from "@vue/composition-api";
import dialogInfo from "./dialog/index"
export default {
  name: "InfoIndex",
  components: { dialogInfo },
  setup(props, { refs, root }) {
    const { removeTips } = global();
    const keyOptions = reactive([
      {
        value: "选项1",
        label: "ID"
      },{
        value: "选项2",
        label: "标题"
      }
    ])
    const options = reactive([
      {
        value: "选项1",
        label: "国际信息",
      },{
        value: "选项2",
        label: "国内信息",
      },{
        value: "选项3",
        label: "行业信息",
      },
    ]);
    const tableData = reactive([
      {
        date: '上海市普陀区金沙江路 1518 弄',
        name: '王小虎',
        address: '2016-05-02',
        manager: "爸爸",
      },{
        date: '上海市普陀区金沙江路 1518 弄',
        name: '王小虎',
        address: '2016-05-02',
        manager: "爸爸",
      }
    ])
    
    const typeValue = ref("");
    const keyValue = ref("ID");
    const dateValue = ref("")
    const inputValue = ref("")
    
    const handleSizeChange = val => {
      console.log(`每页 ${val} 条`);
    }
    const handleCurrentChange = val => {
      console.log(`当前页: ${val}`);
    }
    const addNews = () => {
      refs.dialog.openDialog();
    }
    // const removeTips = (value) => {
      // root.$confirm(value+', 是否继续?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning',
      //   // center: true
      // }).then(() => {
      //   root.$message({
      //     type: 'success',
      //     message: '删除成功!'
      //   });
      // }).catch(() => {
      //   root.$message({
      //     type: 'info',
      //     message: '已取消删除'
      //   });          
      // });
    // }
    const removeNews = () => {
      removeTips({
        value: "确认删除当前信息"
      })
    }
    const removeAllNews = () => {
      removeTips({
        value: "确认删除所有信息"
      })
    }
    const editNews = () => {
      console.log("编辑新闻");
    }
    return {
      options,keyOptions,tableData,
      typeValue,dateValue,keyValue,inputValue,
      handleSizeChange,handleCurrentChange,addNews,removeNews,editNews,removeAllNews
    };
  },
};
</script>

<style lang='scss' scoped>
#infoIndex{
  font-size: 14px;
  .el-row{
    margin: 0 !important;
  }
  .label-value{
    margin-right: 15px;
  }
  .el-table{
    margin-top: 15px;
    font-size: 14px;
  }
  .page-foot{
    margin-top: 15px !important;
    .batch{
      padding: 0 !important;
    }
    .paging{
      text-align: right;
      padding: 0 !important;
    }
    .el-pagination{
      padding: 2px 0;
    }
  }
 
}

</style>
<style lang="scss">
.el-table td, .el-table th{
  text-align: center !important;
}
.el-table .cell{
  line-height: 14px;
  color: #000;
}
</style>>