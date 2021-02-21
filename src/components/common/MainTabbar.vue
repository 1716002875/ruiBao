<template>
	
	<tabbar-box class="tabbarbox">
			<tabbar-item path="/home">
			<img src="~assets/img/tabbar/home.svg" slot="img">
			<img src="~assets/img/tabbar/home_hover.svg" slot="hover">
			<div slot="text">首页</div>
			</tabbar-item>
		
		
			<tabbar-item  path="/about">
				<img src="~assets/img/tabbar/category.svg" slot="img" >
			<img src="~assets/img/tabbar/category_hover.svg" slot="hover">
				<div slot="text">分类</div>
			</tabbar-item>
	
		
			<tabbar-item  path="/shop">
			<img src="~assets/img/tabbar/shopcart.png" slot="img" >
			<img src="~assets/img/tabbar/shopcart_hover.png" slot="hover">
				<div slot="text">购物车</div>
			</tabbar-item>
		
	
			<tabbar-item path="/user">
			<img src="~assets/img/tabbar/profile.png" slot="img" >
			<img src="~assets/img/tabbar/profile_hover.png" slot="hover">
				<div slot="text">我的</div>
			</tabbar-item>
			
	</tabbar-box>
</template>

<script>
	import tabbarItem from 'components/content/Tabbar/TabbarItem.vue';
	import tabbarBox from 'components/content/Tabbar/Tabbar.vue';
	export default {
		name : "mainTabbar",
		components:{
			tabbarItem,
			tabbarBox
		}
	}
</script>

<style scoped>
</style>>

