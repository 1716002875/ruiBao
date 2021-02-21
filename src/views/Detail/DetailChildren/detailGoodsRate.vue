<template>
    <div class="goods-rate" v-if="Object.keys(goodsRate).length !== 0">

        <div v-for="(item,index) in goodsRate" :key="index">

         <div class="user-rate">
             <span>用户评价</span>
             <span>更多---</span>
         </div>

         <div class="rate-content">

             <div class="user-message">
                 <img :src="item.user.avatar" alt="">
                 <span>{{item.user.uname}}</span>
             </div>

             <div class="rate-message">
                    <p>{{item.content}}</p>
                    <span>{{numToString(item.created)}}</span>
                    <span>{{item.style}}</span>
                    <div class="rate-img">
                        <img v-for="(imgitem,indez) in item.images" :key="indez" :src="imgitem" alt="">
                    </div>
             </div>

         </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'detailGoodsRate',
    props:{
        goodsRate:{
            type:Array,
            default(){
                return[]

                
            }
        }
    },
    methods:{
        numToString(num){
        let unixTimestamp = new Date(num*1000 );
         return  unixTimestamp.toLocaleString();
        }
     
    }
}
</script>
<style scoped>
.goods-rate{
    width: 95%;
    margin: auto;
    font-size: 16px;
    border-top:8px solid #f6f6f6;
    margin-top:20px ;
}
.user-rate{
    width:95%;
    margin: 20px auto;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    border-bottom:2px  solid #f6f6f6;
}
.user-message{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
}
.user-message img{
    width: 40px;
    height: 40px;
    border-radius:60px;
}
.user-message span{
    font-weight:600;
    margin-left: 10px;
   
}
.rate-message{
    line-height: 25px;
}
.rate-message span{
    font-size: 13px;
     padding-right:20px ;
}
.rate-img {
    width: 100%;
    height: 50px;
}
.rate-img img{
    width: 60px;
    height: 60px;
    padding-top: 5px;
    padding-right: 5px;
}
</style>