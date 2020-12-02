<template>
	<tab-bar>
		<tab-bar-item path="/home" activeColor="red">
			<!-- 使用目录的别名 需要在别名前加 ~ 符号 -->
			<img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/homeAct.svg" alt="">
			<div slot="item-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/category" activeColor="red">
			<img slot="item-icon" src="~assets/img/tabbar/type.svg" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/typeAct.svg" alt="">
			<div slot="item-text">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/cart" activeColor="red">
			<img slot="item-icon" src="~assets/img/tabbar/shopcar.svg" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/shopcarAct.svg" alt="">
			<div slot="item-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/profile" activeColor="red">
			<img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/profileAct.svg" alt="">
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	// 在import中路径别名前不需要加 ~ 符号
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
	export default {
		name: 'mainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
