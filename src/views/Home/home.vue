<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      v-bind:names="['流行', '新款', '精选']"
      class="TabControl show"
      v-on:untake="untake"
      v-show="isShowTabbar"
      ref="tabControl1"
    ></tab-control>
    <scroll
      class="wrapper"
      ref="scroll"
      v-on:getPosition="getPosition"
      v-bind:probeType="3"
      v-bind:isPullingUp="true"
      v-on:pullingUp="pullingUp"
    >
      <home-swiper
        class="home-swiper"
        v-bind:banners="banners"
        :recommends="recommends"
           @getTopHeight='getTopHeight'
      ></home-swiper>
      <rz-recommend v-bind:recommend="recommends"></rz-recommend>
      <feature-view></feature-view>
      <tab-control
        v-bind:names="['流行', '新款', '精选']"
        class="TabControl"
        v-on:untake="untake"
        ref="tabControl2"
        v-show='isShowTabbar2'
      ></tab-control>
      <goods-list v-bind:goods="showList" ref="goodsList"></goods-list>
      <fix-bug></fix-bug>
    </scroll>
    <back-top v-on:click.native="backTop" v-show="backTopShow"></back-top>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home.js";
import NavBar from "components/common/navBar/NavBar.vue";
import Scroll from "components/content/Scroll/scroll.vue";
import HomeSwiper from "./childrenComps/HomeSwiper.vue";
import rzRecommend from "./childrenComps/RZRecommend.vue";
import FeatureView from "./childrenComps/featureView.vue";
import TabControl from "components/content/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/BackTop/backTop.vue";
import { debounce } from "common/utils.js";
import FixBug from 'components/content/goods/FixBug.vue';


export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    rzRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    FixBug,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      current: "pop",
      backTopShow: false,
      page: 1,
      saveY: 0,
      topHeight:0
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("imgLoading", () => {
      this.$refs.scroll && refresh();
    });
  },
  activated() {
   this.$refs.scroll&&this.$refs.scroll.refresh();
   this.$nextTick(() =>{
     this.$refs.scroll.scrollJump(0, this.saveY, 0);
   }) 
  },
  deactivated() {
    if(this.$refs.scroll)
    this.saveY = this.$store.state.screenPosition;
  },
  computed: {
    showList() {
      return this.goods[this.current].list;
    },
    isShowTabbar() {
      let positionY = this.$store.state.screenPosition;
      return  positionY < -this.topHeight 
    },
    isShowTabbar2() {
      return this.isShowTabbar?false:true
    }
  },
  methods: {
    // 轮播图获取数据，添加到date数组banner,recommends中，注意是then异步请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res+"home");
        this.goods[type].list.push(...res.data.list);
      });
    },
    untake(index) {
      switch (index) {
        case 0:
          this.current = "pop";
          this.index = 0;
          break;
        case 1:
          this.current = "new";
          this.index = 1;
          break;
        case 2:
          this.current = "sell";
          this.index = 2;
          break;
      }
      this.$refs.tabControl1.nowindex = index;
      this.$refs.tabControl2.nowindex = index;
    },
    backTop() {
      this.$refs.scroll.scrollJump(0, 0, 500);
    },
    getPosition(position) {
      let h = position.y;
      if (h <= -3000) {
        this.backTopShow = true;
      } else {
        this.backTopShow = false;
      }
    },
    pullingUp() {
      this.page += 1;
      getHomeGoods(this.current, this.page).then((res) => {
        this.goods[this.current].list.push(...res.data.list);
      });
    },
    getTopHeight() {
      this.topHeight = this.$refs.tabControl2.$el.offsetTop + 44;
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position:relative;
  bottom: 0;
}
.wrapper {
  width: 100%;
  overflow: hidden;
  height: calc(100% - 96px);
}
.home-nav {
  background-image: linear-gradient(#fb7299, #ff69b4);
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
   color: #fff;
}
.home-swiper {
  margin-top: 44px;
}
</style>
