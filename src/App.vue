<!--骨架结构，模板结构，jsx-->
<template>
  <div id="app">
    <router-view/><!--将路由对应起来现实路由的组件-->
  </div>
</template>

<script>
//导入组件：
//import Hello from
export default {
	name: 'app',
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
