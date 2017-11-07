<template>
	<div>
		我是detail部分
	</div>
</template>

<script>
export default {
	// name:'header',
	data(){
		return{

		}
	},
	created(){
		//获取路由参数和vue-route中挂载的两个对象的属性
		//$route(信息数据),$router(功能方法)
		console.log(this.$route.query);
		console.log(this.$route.params);
	},
	mounted(){

	}
}
</script>

<style scoped>
div{
	width: 100%;
	height: 200px;
	background-color: skyblue;
}
</style>
