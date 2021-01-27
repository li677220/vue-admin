import { setToken, setUserName, getUserName, getToken } from "../../utils/app"
const state = {
  toKen: getToken("admin-token") || "",
  userName: getUserName("username") || ""
}
const mutations = {
  setToken(state,value){
    state.toKen = value
    console.log("state.toKen："+state.toKen);
    console.log(value);
    setToken(value)
  },
  setUserName(state,value){
    state.userName = value
    setUserName(value)
  },
  removeState(state){
    state.toKen = ""
    state.userName = ""
  }
}
export default {
  namespaced: true,
  state,
  mutations
}