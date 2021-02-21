<template>
    <div class="RZRecommend">
        <div v-for="item in recommend" :key="item.acm">
            <a :href="item.link"></a>
            <img :src="item.image" alt="">
            <div>{{ item.title}}</div>
        </div>
    </div>
</template>
<script>
export default {
        name : 'RZRecommend',
        props:{
            recommend:{
                type:Array
            }
        }    
}
</script>
<style scoped>
    .RZRecommend{
        width: 100%;
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        padding: 10px 0 30px;
        border-bottom:5px solid rgba(70,70,70,.2) ;
    }
     .RZRecommend img{
        width: 65px;
        height: 65px;
        margin-top:10px;
     }
</style>