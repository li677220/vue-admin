import service from "@/utils/request"
/**
 * 获取列表
 */
export function GetList(data){
  return service.request({
    method: "POST",
    url: "/news/getList/",
    data
  })
}
/**
 * 新增新闻
 */
export function AddInfo(data){
  return service.request({
    method: "POST",
    url: "/news/add/",
    data
  })
}
/**
 * 修改分类
 */
export function EditCategory(data){
  return service.request({
    method: "POST",
    url: "/news/editCategory/",
    data
  })
}
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
 * 获取分类
 */
export function GetCategory(){
  return service.request({
    method: "POST",
    url: "/news/getCategory/",
    data: {}
  })
}
/**
 * 删除信息
 */
export function DeleteInfo(data){
  return service.request({
    method: "POST",
    url: "/news/deleteInfo/",
    data 
  })
}
/**
 * 修改信息
 */
export function EditInfo(data){
  return service.request({
    method: "POST",
    url: "/news/editInfo/",
    data 
  })
}