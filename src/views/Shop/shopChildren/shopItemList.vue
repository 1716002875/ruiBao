<template>
    <div class="shop-item-list" >
        <shop-item  v-for='(item,index) in goods' :key="index" :shopCart="item">
           
        </shop-item>
        <div  class="err"  v-if="Object.keys(goods).length ==0">
            <p>购物车中空空如也哦~</p>
            <p class="err-p2">快去调点宝贝吧~</p>
            <button class="err-button" @click="toHome">去逛逛</button>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import shopItem from './shopItem.vue'
export default {
  components: { shopItem },
    name : 'shopItemList',
    data(){
        return{
        }
    },
    computed:{
        ...mapGetters({
            goods:"getShopCart"
        })
    },
    methods:{
        toHome() {
            this.$router.push('/home');
        }
    }
   
   
    
}
</script>
<style scoped>
.err{
    width: 100%;
    height: 100vh;
    color: #000;
    font-size: 16px;
    text-align: center;
    position: relative;
    top: 40vh;
    line-height: 35px;
}
.err-p2{
    color: #b0b0b0;
    font-size: 14px;
}
.err-button{
    
    padding: 10px 40px;
    border:1px solid orange;
    color:orange;
    border-radius:10px ;
}
</style>