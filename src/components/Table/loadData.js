import { reactive } from '@vue/composition-api'
import { GetUserList } from "@/api/user.js"

export function loadData(){
  const tableData = reactive({
    item: []
  })
  const loadingData = () => {
    let reqData = {
      username:"",
      truename:"",
      phone:"",
      pageNumber:1,
      pageSize:10
    }
    GetUserList(reqData).then(res => {
      let resData = res.data.data.data
      tableData.item = resData
    }).catch(err => {
      console.log(err);
    })
  }
  return{
    tableData, loadingData
  }
}