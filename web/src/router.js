import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//导入组件模板
import App from "./components/app.vue"
import Abc from "./components/aaa.vue"
import Bcd from "./components/bbb.vue"
import Ccc from "./components/child/ccc.vue"
import Ddd from "./components/child/ddd.vue"

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/app' },
        { path: '/aa', component: Abc },
        { path: '/bb', component: Bcd,children:[
                { path: '/cc', component: Ccc },
                { path: '/dd', component: Ddd },
            ]}
    ]
});

export default router