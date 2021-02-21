<template>
    <swiper>
			<swiper-item v-for="(item,index) in banners" :key="index" >
				<a :href="item.link">
					<img :src="item.image" alt="" @load="getTopHeight">
				</a>
			</swiper-item>
		</swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'common/swiper/index.js';
export default {
    name : "HomeSwiper",
    data(){
        return{

        }
    },
    props:{
        banners:{
            type : Array,
            default(){
                return[]
            }
        },
        recommends:{
            type : Array,
            default(){
                return[]
            }
        }

    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
        getTopHeight() {
            this.$emit('getTopHeight');
            console.log("home-swiper图片刷新了-----------Home/childrenComps/HomeSwiper.vue")
        }
    }
}
</script>
<style scoped>

</style>