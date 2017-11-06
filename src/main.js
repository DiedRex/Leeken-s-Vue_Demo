// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
import Vue from 'vue'
import App from './App'
import router from './router'

//引入子组件对象在main.js中
import global from './components/global.vue'

//声明为全局组件
Vue.component('global',global);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render:function(c){
	// 	return c;
	// }
	router: router,//通过路由找到vue想引入的路由
	render: c => c(App),
	template:'</App>'
})

