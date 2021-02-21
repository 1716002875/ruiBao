<template>
    <div class="detail-check-button">
        <img src="~assets/img/cart/check.png" :class="{active:isActive}" alt="">
    </div>
</template>
<script>
export default {
    name : 'detailCheckButton',
    data(){
        return{
            
        }
    },
    props:{
        isActive:{
            type:Boolean
        }
    }
}
</script>
<style scoped>
.detail-check-button img{
    width: 20px;
    height: 20px;
    border: 2px solid orange;
    border-radius:50% ;
}
.active{
    background-color: var(--color-tint);
    border: none;
}
</style>