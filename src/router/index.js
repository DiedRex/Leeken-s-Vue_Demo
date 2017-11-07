import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bottom from '../components/bottom'
import banner from '../components/banner'
import mid from '../components/mid'
import List from '../components/list.vue'
import Detail from '../components/detail.vue'


Vue.use(Router)

export default new Router({
  // routes: [
  //   {
	// 		path:'/banner',//条件
	// 		name:'banner',
  //     component:banner
	// 	},
	// 	{
	// 		path:'/mid',
	// 		name:'mid',
	// 		component:mid
	// 	},
	// 	{
	// 		path:'/bottom',
	// 		name:'bottom',
	// 		component:bottom
	// 	}
	// ]


	//router-link对象传参数路由
		routes:[
			{
				name:'list',
				path:'/list',
				component:List
			},
			{
				name:'detail',
				path:'/detail/:id',
				component:Detail
			}
		]
})
