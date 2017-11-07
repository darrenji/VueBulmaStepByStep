/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

const state = {
    isAuth: true, //是否登录
    authToken: '', //token
    account: {},//账户信息
    toastList: [],//系统提示
    modal: false,//全局modal
    preloader: false
}

const mutations = {
    isAuth (state, status) {
        state.isAuth = status
    },
    authToken (state, token) {
        state.authToken = token
    },
    preloader (state, status) {
        state.preloader = status
    },
    modal (state, status) {
        state.modal = status
    },
    toast (state, json) {
        state.toastList.push(json)
        setTimeout(()=>{
            //shift()把数组的第一个元素从数组中删除，并返回第一个数组元素
            state.toastList.shift()
        }, 2000)
    }
}

const getters = {
    getIsAuth: state => { return state.isAuth },
    getAuthToken: state => { return state.authToken },
    getToast: state => { return state.toastList },
    getModal: state => { return state.modal },
    getPreloader: state => { return state.preloader }
}

export default new Vuex.Store({
    state,
    getters,
    mutations
})
