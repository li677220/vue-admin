import { removeToken } from "@/utils/app"
const state = {
  isCollapse: JSON.parse(sessionStorage.getItem("isClose")) || false,
  // toKen: "",
  // userName: getUserName("username") || ""
  rawData: [],
  editId: ""
}
const getters = {
  rawData(state) {
    return state.rawData
  },
  editId(state) {
    return state.editId
  }
}

const mutations = {
  switchIsCollapse(state) {
    state.isCollapse = !state.isCollapse
    sessionStorage.setItem("isClose", state.isCollapse)
  },
  setRawData(state,params){
    state.rawData = params
  },
  setEditId(state,val){
    state.editId = val
  }
}
const actions = {
  signOut(context){
    removeToken("admin-token")
    removeToken("username")
    context.commit("user/removeState","",{root: true})
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}