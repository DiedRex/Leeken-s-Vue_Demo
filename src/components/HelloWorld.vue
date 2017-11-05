<template>
	<div>
		<ul>
			<li v-for="(hero,index) in heros" :key="index" :class="{'A':'red','B':'blue','C':'pink','D':'orange'}[hero.score]">
				{{hero.name}},{{hero.score}}
				<button @click="delHero(index)">删除</button>
			</li>
		</ul>
		英雄姓名:<input type="text" v-model="name"><br/>
		英雄分数:<input type="text" v-model="score"><br/>
		<button @click="addHero">添加英雄</button>
	</div>
</template>

<script>
export default {
  data () {
    return {
			name:'',
			score:'',
      heros:[{
				id:1,
				name:'奥利安那',
				score:'A'
			},{
				id:2,
				name:'崔斯特',
				score:'B'
			},{
				id:3,
				name:'卡利斯塔',
				score:'C'
			},{
				id:4,
				name:'崔丝塔那',
				score:'D'
			}]
		}
	},
	methods:{
		addHero(){
			this.heros.push({
				name:this.name,
				score:this.score
			});
			this.name='';
			this.score='';
		},
		delHero(index){
			this.heros.splice(index,1);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li{
	list-style-type: none;
}

.red{
	background-color: firebrick;
}

.blue{
	background-color: skyblue;
}

.pink{
	background-color: hotpink;
}

.orange{
	background-color: olivedrab;
}
</style>
