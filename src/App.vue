<template>
	<div id="App">
		<keep-alive exclude="Detail">
		<router-view></router-view>
		</keep-alive>
		<mainTabbar class="main-tabbar" v-if="$route.meta.showTab"></mainTabbar>	
	</div>
</template>

<script>
	
	import mainTabbar from 'components/common/MainTabbar.vue';
	export default {
		name: 'App',
		data() {
			return {
				text:"home"
			}
		},
		components: {
			mainTabbar
		},
		methods:{
			
		}
	}
</script>

<style>
  @import "assets/css/base.css";
  .main-tabbar{
	position: absolute;
	bottom: 0;
	background-color: #fff;
  }
</style>
