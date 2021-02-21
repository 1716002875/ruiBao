<template>
    <div class="GoodsList" >
        <!-- {{goods}} -->
        <goods-recommend v-for="(item,index) in goods" :itemgoods="item" :key="index"></goods-recommend>
        </div>
</template>
<script>
import GoodsRecommend from './GoodsRecommend.vue';
export default {
        name : 'GoodsList',
        props:{
            goods:{
                type : Array,
                default(){
                    return{

                    }
                }
            }
        }, 
        components:{
           GoodsRecommend
        }   
}
</script>
<style scoped>
.GoodsList{
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>