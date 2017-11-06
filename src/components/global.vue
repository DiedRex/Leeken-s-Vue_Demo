<template>
	<div>
		我是全局组件{{texttwo}}
		<button @click="show">显示texttwo</button>
	</div>
</template>

<script>
export default {
	// name:'bottom',
	data(){
		return{

		}
	},
	props:[
		'texttwo'
	],
	methods:{
		show(){
			alert(this.texttwo)
		}
	}
}
</script>

<style scoped>
div{
	width: 100%;
	height: 200px;
	background-color: oldlace;
}
</style>
