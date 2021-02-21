<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    isPullingUp: {
      type: Boolean,
      default: false,
    },
  },
  watch:{
    scroll() {
      console.log("我是监察者，检查scroll创建了------------components/content/Scroll/scroll.vue")
    }
  },
  mounted() {
    // 渲染前无法活动父子容器高度，所以必须在mounted后创建实例
    this.$nextTick(() =>{
      this.scroll = new BScroll(this.$refs.wrapper, {
        observeDOM: true,
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.isPullingUp,
        useTransition: false,
        mouseWheel: true,
        disableMouse: false,
        disableTouch: false,
      });
      // x,y获取
      this.scroll.on("scroll", (position) => {
        this.$store.state.screenPosition = position.y;
        this.$emit("getPosition", position);
      });
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
        setTimeout(() => {
          // 异步在完成一次下拉
          this.scroll.finishPullUp();
        }, 500);  
    })
    })
  },
  updated() {
    this.scroll.refresh()
  },
  methods: {
    // home组件中的backtop组件通过@on:click.native='' 绑定事件内部this.$refs.scroll(refs中scroll组件标识).scrollJump()
    scrollJump(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y*1, time);
    },
    refresh() {
      // 页面中是否加载完成scroll插件，商品图片更新load时可能scroll还没有挂载
      this.scroll && this.scroll.refresh();
      // console.log("次页面被刷新了，重新获取content高度");
    },
  },
};
</script>
<style scoped>
</style>