<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'TabBar'
	}
</script>

<style>
	#tab-bar{
		display: flex;
		background-color: #f2f2f2;
		position: fixed;
		/*left和right的作用：使tab-bar占据整个屏幕宽度*/
		left: 0;
		right: 0;
		bottom: 0;
		/* 顶部过渡效果————阴影 */
		box-shadow: 0px -1px 1px rgba(100,100,100,.1);
	}
</style>
