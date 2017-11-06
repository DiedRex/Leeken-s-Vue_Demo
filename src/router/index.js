import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import bottom from '../components/bottom'
// import banner from '../components/banner'
// import mid from '../components/mid'

Vue.use(Router)

export default new Router({
  routes: [
    {
			path:'/',//条件
      component: HelloWorld
		}
		// {
		// 	path:'/',
		// 	name:'header',
		// 	component:header
		// },
		// {
		// 	path:'/',
		// 	name:'mid',
		// 	component:mid
		// },
		// {
		// 	path:'/',
		// 	name:'footer',
		// 	component:footer
		// }
  ]
})
