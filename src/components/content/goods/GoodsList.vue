<template>
    <div class="GoodsList" >
        <!-- {{goods}} -->
        <goods-list-item v-for="(item,index) in goods" :itemgoods="item" :key="index"></goods-list-item>
        </div>
</template>
<script>
import GoodsListItem from './GoodsListItem';
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
            GoodsListItem
        }   
}
</script>
<style scoped>
.GoodsList{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>