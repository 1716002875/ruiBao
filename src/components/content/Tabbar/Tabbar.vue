<template>
	<div id="tabbar-box">
		<slot></slot>
	</div>
</template>
<script>
	
	export default {
		name : "Tabbar" 
	}
</script>
<style>
	#tabbar-box{
		width: 100%;
		height: 49px;
		display: flex;
		flex: 1;
		text-align: center;
		box-shadow: 0 -5px 3px rgba(220,220,220,.4);
	}
</style>