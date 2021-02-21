<template>
    
        <swiper class="detailSwiper" >
            <swiper-item v-for="(item,index) in swiperImg" :key="index"><img :src="item" alt="">
            </swiper-item>
        </swiper>
  
</template>
<script>
import {Swiper,SwiperItem} from 'common/swiper/index.js'
export default {
  components: { Swiper, SwiperItem },
    name : 'detailSwiper',
    props:{
        swiperImg:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>
<style scoped>
.detailSwiper{
    width: 100%;
    height: 300px;
    overflow: hidden;
}
</style>