// import $ from 'jquery'
//
// $(function () {
//     // 设置偶数行背景色，索引从0开始，0是偶数
//     $('#list li:even').css('backgroundColor','lightblue');
// // 设置奇数行背景色
//     $('#list li:odd').css('backgroundColor','lightgreen');
// })
//
// import "../src/css/index.css"
// import "../src/css/index.less"
// import "../src/css/index.scss"
// import "bootstrap/dist/css/bootstrap.css"
//
// class Person {
//     static username={name:'小米',sge:23}
// }
// let per=new Person();
// console.log(Person.username);


//导入vue包
import Vue from "vue"

//导入MintUI组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import { Button } from 'mint-ui';

Vue.component(Button.name, Button);

import VueRouter from 'vue-router'
Vue.use(VueRouter);
//导入路由模块
import router from "./router.js"
// //导入组件模板
import App from "./components/app.vue"

const vm=new Vue({
    el:'#app',
    data:{},
    render:function (elements) {
        return elements(App)
    },
    router
})