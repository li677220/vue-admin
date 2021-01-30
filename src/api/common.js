import { GetCategory, GetCategoryAll } from "@/api/news";
import { reactive } from "@vue/composition-api"
export function common(){
  const categoryInfo = reactive({
    item: []
  })
  const getInfoCategory = () => {
    GetCategory().then(response => {
      categoryInfo.item = response.data.data.data
    }).catch(err => {
      console.log(err);
    })
  }
  const getInfoCategoryAll = () => {
    GetCategoryAll().then(response => {
      categoryInfo.item = response.data.data
    }).catch(err => {
      console.log(err);
    })
  }
  return{
    categoryInfo,getInfoCategory,getInfoCategoryAll
  }
}