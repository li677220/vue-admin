import service from "@/utils/request"
/**
 * 列表
 */

/**
 * 新增
 */

/**
 * 编辑
 */

/**
 * 删除分类
 */
export function DeleteCategory(data){
  return service.request({
    method: "POST",
    url: "/news/deleteCategory/",
    data
  })
}
/**
  * 添加一级分类
  */
export function AddFirstCategory(data){
  return service.request({
    method: "POST",
    url: "/news/addFirstCategory/",
    data
  })
}
/**
 * 获取新闻分类
 */
export function GetCategory(){
  return service.request({
    method: "POST",
    url: "/news/getCategory/",
    data: {}
  })
}