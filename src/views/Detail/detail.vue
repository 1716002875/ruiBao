<template>
  <div id="Detail">
    <detail-nav-bar
      class="detailNav"
      @jumpPosition="jumpPosition"
      ref="nav"
    ></detail-nav-bar>
    <scroll
      class="wrapper2"
      ref="scroll"
      v-bind:probeType="3"
      v-bind:isPullingUp="true"
      @getPosition="getPosition"
    >   
      <detail-swiper :swiperImg="swiperImg"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :item="item"></detail-shop-info>
      <detail-info :detailInfo="detailInfo" @imgLoad="imgLoad"></detail-info>
      <detail-goods-params
        :paramInfo="goodsParam"
        ref="detailGoodsParams"
      ></detail-goods-params>
      <detail-goods-rate
        :goodsRate="goodsRate"
        ref="detailGoodsRate"
      ></detail-goods-rate>
      <goods-re-list
        :goods="goodsRecommend"
        ref="goodsRecommend"
      ></goods-re-list>
      <fix-bug class="fix-bug"></fix-bug>
    </scroll>
    <back-top class="backTop" v-if="backtop" @click.native="back"></back-top>
    <detail-bottom-bar @addCart="addCart" ></detail-bottom-bar>
    <goods-style v-if="false"></goods-style>
  </div>
</template>
<script>
import {
  getDetail,
  goods,
  item,
  goodsParam,
  getGoodsRecommend,
} from "network/getDetail.js";
import { debounce } from "common/utils.js";
import detailNavBar from "../Detail/DetailChildren/detailNavBar.vue";
import DetailSwiper from "../Detail/DetailChildren/detailSwiper.vue";
import Detail from "../Detail/detail.vue";
import DetailBaseInfo from "../Detail/DetailChildren/detailBaseInfo.vue";
import DetailShopInfo from "../Detail/DetailChildren/detailShopInfo.vue";
import Scroll from "components/content/Scroll/scroll.vue";
import DetailInfo from "../Detail/DetailChildren/detailInfo.vue";
import DetailGoodsParams from "../Detail/DetailChildren/detailGoodsParams.vue";
import DetailGoodsRate from "../Detail/DetailChildren/detailGoodsRate.vue";
import BackTop from "components/content/BackTop/backTop.vue";
import GoodsReList from "components/content/goods/GoodsReList.vue";
import DetailBottomBar from '../Detail/DetailChildren/detailBottomBar.vue';
import FixBug from "components/content/goods/FixBug.vue";
import GoodsStyle from '../../common/goodsStyle/goodsStyle.vue';

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      swiperImg: [],
      goods: {},
      item: {},
      detailInfo: {},
      goodsParam: {},
      goodsRate: [],
      backtop: false,
      offset: [],
      debounce: null,
      goodsRecommend: [],
    };
  },
  created() {
    // 推荐页面必须在商品图片，参数，评论加载完后，再被加载
    if (this.goods && this.item && this.detailInfo && goodsParam) {
      setTimeout(() => {
        getGoodsRecommend().then((res) => {
          this.goodsRecommend = res.data.list;
        });
      }, 300);
    }
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      //  顶部轮播图数据
      this.swiperImg = data.itemInfo.topImages;
      // 轮播下的数据......销量，7天无理由退货，收藏人数
      this.goods = new goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 店家信息评分之类的数据请求
      this.item = new item(data.shopInfo);
      // 店家模特商品图片
      this.detailInfo = data.detailInfo;
      //商品参数下边的图片,通过goodsParam类
      this.goodsParam = new goodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 商品评论,只有一个对象的时候，还创建类，多此一举了
      this.goodsRate = data.rate.list;

      // 1---在created生命周期中获得高度，会出现undefined因为此时this.$refs.$el树还没有被渲染呢，所以值不对
      // this.offset = [];
      //   this.offset.push(0);
      //   this.offset.push(this.$refs.detailInfo.$el.offsetTop);
      //   this.offset.push(this.$refs.detailGoodsParams.$el.offsetTop);
      //   this.offset.push(this.$refs.detailGoodsRate.$el.offsetTop);
      //   console.log(this.offset);

      // 2-----此时为预选钩子，等到mounted的时候回调,但还是会出bug，
      // 因为有时候图片还没加载完，但是Dom已经加载完了，图片的高度没有算上去，导致元素真实高度计算错误
      // this.$nextTick(() => {
      //   this.offset = [];
      //   this.offset.push(0);
      //   this.offset.push(this.$refs.detailInfo.$el.offsetTop);
      //   this.offset.push(this.$refs.detailGoodsParams.$el.offsetTop);
      //   this.offset.push(this.$refs.detailGoodsRate.$el.offsetTop);
      //   console.log(this.offset);
      // });
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("imgLoading", () => {
      this.$refs.scroll && refresh();
    });
  },
  //  mounted(){
  // if(this.$refs.detailInfo&&this.$refs.detailGoodsParams&&this.$refs.detailGoodsRate){
  //   setTimeout(()=>{
  //  this.$nextTick(() =>{
  //     this.offset = [];
  //     this.offset.push(0);
  //     this.offset.push(this.$refs.detailInfo.$el.offsetTop);
  //     this.offset.push(this.$refs.detailGoodsParams.$el.offsetTop);
  //     this.offset.push(this.$refs.detailGoodsRate.$el.offsetTop);
  //     console.log(this.offset);
  //   })
  //   },300)

  //   }
  //  },
  components: {
    detailNavBar,
    DetailSwiper,
    Detail,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailInfo,
    DetailGoodsParams,
    DetailGoodsRate,
    BackTop,
    GoodsReList,
    FixBug,
    currentindex :null,
    DetailBottomBar,
    GoodsStyle,
  },

  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      // 3.每次加载一次图片就重新获取高度,获取图片高度，这样很精准，但是性能不好
      this.offset = [];
      this.offset.push(0);
      this.offset.push(this.$refs.detailGoodsParams.$el.offsetTop );
      this.offset.push(this.$refs.detailGoodsRate.$el.offsetTop );
      this.offset.push(this.$refs.goodsRecommend.$el.offsetTop);
      this.offset.push(Number.MAX_VALUE);
      // console.log(this.offset)
    },
    back() {
      this.$refs.scroll.scrollJump(0, 0, 500);
    },
    jumpPosition(index) {
      this.$refs.scroll.scrollJump(0, -this.offset[index], 500);
    },
    getPosition(position) {
      this.backtop = -position.y > 3000;
      const positionY = -position.y;
      let length =  this.offset.length;
      // for(let i = 0;i<length;i++){
      //   // 1.这种会导致下标越界，不会打印出i==4
      //   // if(positionY >this.offset[i] &&  positionY < this.offset[i+1]){
      //   //   console.log(i);
      //  // }
      // //  2.太复杂，判断过多
      // //  if(
      // //    this.currentindex !==i&&(
      // //    (i < length-1 && positionY > this.offset[i] && positionY < this.offset[i+1])
      // //    ||
      // //    (i == length-1 && positionY > this.offset[i]))){
      // //   this.currentindex = i;
      // // this.$refs.nav.current = this.currentindex;
      // //  }
      // } 
      // 3.给offset末尾加上js中的数字最大值标识--Number.Nax_VALUE
      for(let i =0;i<length-1;i++){
        if(this.currentindex !==i&&positionY>this.offset[i]&&positionY<this.offset[i+1]){
          this.currentindex = i;
          this.$refs.nav.current = this.currentindex;
        }
      }
      },
      // 监听组件emit添加购物车事件
      addCart() {
        const product = {};
        // 实物照片
        product.image = this.swiperImg[0];
        // 商品标题
        product.title = this.goods.title;
        // 商品描述
        product.desc = this.goods.desc;
        // 商品真实价格
        product.price = this.goods.realPrice;
        // 店家logo
        product.logo = this.item.logo;
        // 店家名字
        product.name = this.item.name;
        // 商品唯一标识id
        product.iid = this.iid;
        // 向vuex中store中muitations递交请求
        // 1.promise
        // this.$store.dispatch('addToCart',product).then(res => {
        // this.$toast.show(res,2500)});
        // 2.normal
        this.$store.dispatch('addToCart',product);
        this.$toast.show('添加成功！',2500);
        //在这里提示用户，添加购物车是否成功！
      }
    }
};
</script>
<style scoped>
#Detail {
  background-color: #fff;
  height: 100vh;
}
.detailNav {
  height: 44px;
  /* z-index: 9; */
  background-color: rgba(255, 255, 255, 0.8);
}
.wrapper2 {
  position: absolute;
  overflow: hidden;
  height: 100%;
}
.backTop {
  position: fixed;
  bottom: 50px;
  right: 15px;
  z-index: 99;
}
.fix-bug {
  height: 110px;
}
</style>