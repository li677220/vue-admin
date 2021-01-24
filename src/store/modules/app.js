import { removeToken } from "@/utils/app"
const state = {
  isCollapse: JSON.parse(sessionStorage.getItem("isClose")) || false,
  // toKen: "",
  // userName: getUserName("username") || ""
}
const mutations = {
  switchIsCollapse(state) {
    state.isCollapse = !state.isCollapse
    sessionStorage.setItem("isClose", state.isCollapse)
  },
}
const actions = {
  signOut(state){
    removeToken("admin-token")
    removeToken("username")
    state.commit("user/removeState","",{root: true})
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}