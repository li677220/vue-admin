import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login"
import app from "./modules/app"
import user from "./modules/user"
Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   // isCollapse : JSON.parse(Cookie.get("isClose")) || false //Cookie首次需要判断Undefined
  //   isCollapse: JSON.parse(sessionStorage.getItem("isClose")) || false
  // },
  // mutations: { //同步 无回调
  //   switchIsCollapse(state) {
  //     state.isCollapse = !state.isCollapse
  //     sessionStorage.setItem("isClose", state.isCollapse)
  //     // Cookie.set("isClose",state.isCollapse || "false")
  //   }
  // },
  // actions: {  //异步  可以回调处理事情
  //   // test(context,data){
  //   //   console.log(context) //commit、dispatch、getters、rootGetters、rootState、state
  //   //   console.log(data);
  //   // }
  //   login(context, requestData) {
  //     return new Promise((res, rej) => {
  //       Login(requestData).then((response) => {
  //         res(response)
  //       }).catch((err) => {
  //         rej(err)
  //       })
  //     })
  //   }
  // },
  modules: {
    login, app, user
  }
});
