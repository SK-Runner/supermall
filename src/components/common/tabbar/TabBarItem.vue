<template>
	<div class="tab-bar-items" @click="clicked">
		<!-- 插槽建议使用div包装 -->
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<!--
		插槽不能设置class，渲染后会被元素替换掉，类名不显示，需要外层包裹div
		-->
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabBarItem',
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'#285de8'
			}
		},
		data(){
			return {
			}
		},
		computed:{
			//计算属性动态决定isActive的值
			//判断当前活跃路由路径是否存在于跳转路径中
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{}
			}
		},
		methods:{
			clicked(){
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-items{
		flex: 1;
		text-align: center;
		/* 移动端的tab-bar一般为49px */
		height: 49px;
		font-size: 14px;
	}
	
	.tab-bar-items img{
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: center;
		margin-bottom: -3px;
	}
	
</style>
