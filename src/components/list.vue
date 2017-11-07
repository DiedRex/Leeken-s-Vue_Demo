<template>
	<div>
		列表
		<ul>
			<!-- <li v-for="(hero,index) in heros" :key="index">
					{{hero.name}}
					<router-link :to="{name:'detail',query:{id:index}}">查看</router-link>
			</li> -->

			<li v-for="(hero,index) in heros" :key="index">
					{{hero.name}}
					<!-- 数据传输  ?index=1 -->
					<router-link :to="{name:'detail',params:{id:index}}">查看</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	// name:'headesr',
	data(){
		return{
			heros:[{
				name:'李白'
			},
			{
				name:'王昭君'
			}]
		}
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
