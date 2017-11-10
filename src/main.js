/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Moment from 'moment' // 时间处理插件

// vuex store
import store from './store'

// demos
import Index from './demos/Index'
import App from './App'

// components
import Buttons from './demos/Buttons'
import Card from './demos/Card'
import Content from './demos/Content'
import Form from './demos/Form'
import Icon from './demos/Icon'
import Image from './demos/Image'
import Level from './demos/Level'

Vue.use(Router)
Vue.use(Resource)

// $http请求发出的数据不是form data的形式，而是request payload，可能需要在Vue实例上加：http: { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
// emulateHTTP,默认为false,当使用POST,PUT, PATCH, DELETE方式时，把请求头字段HTTP_Method_Override设置为原始方法，这是为了应对服务器无法接收POST, PUT, PATCH, DELETE而准备的
// emulateJSON,默认是false,设置请求头Content-Type的值为application/x-www-form-urlencoded
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true

Moment.locale('zh-cn')

// 全局过滤器
Vue.filter('text2html', function(str) {
  return global.$fn.t2h(str)
})

// 全局闭包，公用函数库，也可以放置到vuex2.0中
global.$fn = {
  // ajax默认api地址,一般为API接口地址
  ajaxhost: '//。。。/api',
  // 获取url中的参数，允许默认值的设定
  getparam (name, defaultValue) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let r = window.location.search.substr(1).match(reg)
    return (!r) ? ((!defaultValue) ? '' : defaultValue) : unescape(r[2])
  },
  moment: Moment,
  init () {
    // 登录或注销后需要清空cache
    store.commit('isAuth', false)
    store.commit('authToken', '')
  },
  // 随机字符串
  getCode (n) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let res = ''
    for (let i = 0; i < n; i++) {
      res += chars[Math.floor(Math.random() * chars.length)]
    }
    return res
  },
  // text2html
  t2h (str) {
    let converter = document.createElement('DIV')
    converter.innerText = str
    let html = converter.innerHTML
    converter = null
    return html
  },
  // cache 机制
  cache: [],
  // 默认300秒数据缓存时间
  exp: 300,
  getCache (url) {
    let json = this.cache[url]
    return (json && (json.exp >= this.timestamp())) ? json.data : null
  },
  setCache (url, data, exp) {
    // 默认300秒,{data,exp}
    this.cache[url] = {data: data, exp: this.timestamp() + ((!exp) ? this.exp : exp)}
    // console.log(this.cache)
  },
  // get方式 不鉴权，可进行数据缓存
  $get (ajaxurl, callback, callerr, exp) {
    // callback _self:this,data,ajax
    let url = ajaxurl
    let data = this.getCache(url)
    if (!data) {
      Vue.http.get(url, {}, {
      }).then((response) => {
        callback(response.data, true)
        if (!(exp && exp < 0)) this.setCache(url, response.data, exp)
      }, (response) => {
        this.ajaxerr(response)
      })
    } else {
      callback(data, false)
    }
  },
  // post带鉴权，不使用缓存
  $post (ajaxurl, param, callback, _self, exp) {
    let url = this.ajaxhost + ajaxurl
    _self.$http.post(url, param, {
      headers: {
        // 加入授权验证算法
        'Authorization': 'test'
      }
    }).then(function (response) {
      callback(_self, response.data)
    }, function (response) {
      this.ajaxerr(response)
    })
  },
  // ajax错误处理
  ajaxerr (response) {
    // 此处需配合后端进行自定义的错误设置
    // console.log(response)
    switch (response.status) {
      case 0: // 网络不通
        this.toast('warning', '网络暂时未能连通')
        break
      case 401: // 未登录
      case 521: // 超时
      case 522: // 错误
        this.init()
        break
      case 523:
        this.toast('danger', '当前时间存在较大偏差')
        break
      case 524:
        this.toast('danger', '未找到相关数据')
        break
      default:
        // 其它错误，暂不处理
        break
    }
  },
  toast (mode, title) {
    store.commit('toast', {id: new Date().getTime(), title: (title && title.length) > 0 ? title : '操作完成', mode: mode})
  },
  // 时间戳
  timestamp () {
    return Math.floor(new Date().getTime() / 1000)
  }
}

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/buttons',
    component: Buttons
  },
  {
    path: '/card',
    component: Card
  },
  {
    path: '/content',
    component: Content
  },
  {
    path: '/form',
    component: Form
  },
  {
    path: '/icons',
    component: Icon
  },
  {
    path: '/image',
    component: Image
  },
  {
    path: '/level',
    component: Level
  }
]

const router = new Router({
  base: '/admin/',
  mode: 'history',
  linkActiveClass: 'is-active',
  routes
})

router.beforeEach((to, from, next) => {
    if (store.getters.getIsAuth || !to.meta.auth) {
        next()
    } else {
        global.$fn.init()
        next()
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')