<!--骨架结构，模板结构，jsx-->
<template>
  <div id="app">
    <!-- <router-link :to={name:'header'}>header</router-link>
    <router-link :to={name:'mid'}>mid</router-link> -->
	 <!-- <banner textone="大"></banner> -->
	 <!-- <div>
		 <a href="#/banner">进入头部</a>
		 <a href="#/mid">进入内容</a>
		 <a href="#/bottom">进入尾部</a>
	 </div> -->

	 <!-- <router-link :to="{ name:'banner'}">进入头部</router-link>
	 <router-link :to="{ name:'mid'}">进入内容</router-link>
	 <router-link :to="{ name:'bottom'}">进入尾部</router-link>
	 <router-link to="/mid">进入内容</router-link> -->
	 <!-- <global v-bind:texttwo="texttwo"> -->
	 </global>
	 <!-- <mid></mid> -->
   <router-view/>
	 <bottom></bottom>
	 <button @click="listen">爸爸焦急地听电话</button>
  </div>
</template>

<script>
//引入入子组件，
import banner from '@/components/banner'
import mid   from '@/components/mid'
import bottom from '@/components/bottom'

//引入父子组件的连接器connector
import connector from '../src/connector.js'
export default {
	name: 'app',
	components:{//使用儿子组件
		mid,
		banner,
		bottom
	},
	data(){
		return{
			texttwo:'啊哈哈哈'
		}
	},
	methods:{
		listen(){
			connector.$on('phone',function(msg){
				console.log('听到了'+ msg);
			});
		}
	}
}
</script>

 <!--样式代码-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.ul{
	list-style-type: none;
}
</style>
