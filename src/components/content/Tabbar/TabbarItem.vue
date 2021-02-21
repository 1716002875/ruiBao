<template>
	<div id="TabbarItem" v-on:click="router()" v-bind:style="fontcolor" >
		<div v-if="check">
			<slot name="img"><img src="~assets/img/tabbar/profile.png"></slot>
		</div>
		<div v-else>
			<slot name="hover"><img src="~assets/img/tabbar/profile_hover.png"></slot>
		</div>
		<strong>
			<slot name="text"></slot>
		</strong>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			path: String,
			color: {
				type: String,
				default: "#fb7299"
			}
		},
		name: "TabbarItem",
		computed: {
			check() {
				// console.log(false==false);
				return !this.$route.path.indexOf(this.path) == false;
			},
			fontcolor() {
				return this.check ? {} : {
					color: this.color
				}
			}
		},
		methods: {
			router() {
				if (this.$route.path == this.path) {
					return
				}
				this.$router.push(this.path)
			}
		}
	}
</script>
<style>
	#TabbarItem {
		width: 150px;
		color: #000;
		font-size: 15px;
		height: 49px;
		text-align: center;
	}

	#TabbarItem img {
		display: block;
		margin: auto;
		width: 24px;
		width: 24px;
		padding-top: 3px;
	}
</style>
