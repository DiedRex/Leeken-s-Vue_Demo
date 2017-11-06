<template>
	<div>
		我是尾部
		<button @click="callDaddy">打电话给老爸</button>
	</div>
</template>

<script>
import connector from '../connector.js';
export default {
	// name:'bottom',
	data(){
		return{

		}
	},
	methods:{
		callDaddy(){
			//和老爸进行通信，发射信号给老爸
			connector.$emit('phone','还有60分钟到家');
		}
	}
}
</script>

<style scoped>
div{
	width: 100%;
	height: 200px;
	background-color:orange;
}
</style>
