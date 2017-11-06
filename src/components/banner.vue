<template>
	<div>
		我是{{textone}}头部
	</div>
</template>

<script>
export default {
	// name:'banner',
	data(){
		return{

		}
	},
	props:[
		'textone'
	]
}
</script>

<style scoped>
div{
	width: 100%;
	height: 200px;
	background-color: firebrick;
}
</style>
