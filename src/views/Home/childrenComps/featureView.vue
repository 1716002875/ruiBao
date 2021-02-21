<template>
        <div class="featureView">
            <slot><a href=""><img src="~assets/img/home/recommend_bg.jpg" alt=""></a></slot>
        </div>
</template>
<script>
export default {
    name : "featureView"
}
</script>
<style scoped>
    .featureView{
        width: 100%;
        
    }
    .featureView img{
        width: 100%;
        
    }
</style>