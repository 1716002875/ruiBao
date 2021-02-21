<template>
    <div class="user-assets">
        <div class="assets-number-unit"><span class="assets-number">0.00</span><span>{{assets.unit}}</span></div>
        <p>{{assets.message}}</p>
    </div>
</template>
<script>
export default {
    name : 'userAssets',
    props:{
        assets:{
            type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>
<style scoped>
.user-assets{
    width: 140px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size:14px ;
    line-height: 25px;
    border-right:1px solid #f6f6f6 ;
}
.assets-number{
    color: red;
    font-size:22px;
    padding-right: 5px;
}
.assets-number-unit{
    margin-top: 25px;
}
</style>