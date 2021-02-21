import {request} from 'network/request.js';
export const getDetail = function(iid){
    return request({
        url:'/detail/',
        params : {
            iid
        }
    })
};
export const getGoodsRecommend =function(){
    return request({
        url:'/recommend'
    })
}
// e6新语法，添加了类class,class类内部有有个constructor构造函数
export class goods{
    constructor(itemInfo,columns,services){
            this.title = itemInfo.title;
            this.desc = itemInfo.desc;
            this.newPrice = itemInfo.newPrice;
            this.oldPrice = itemInfo.oldPrice;
            this.discount = itemInfo.discountDesc;
            this.columns = columns;
            this.services = services;
            this.realPrice = itemInfo.lowNowPrice;
    }
}
export class item{
    constructor(shopInfo){
            this.logo = shopInfo.shopLogo;
            this.name = shopInfo.name;
            this.fans = shopInfo.cFans;
            this.sells = shopInfo.cSells;
            this.score = shopInfo.score;
            this.goodsCount = shopInfo.cGoods;

    }
}
export class goodsParam{
    constructor(info,rule) {
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}

// 只有一个对象的时候，不需要封装
// export class goodsRate{
//     constructor(rate){
//         // 买家评论
//         this.content = rate.content;
//         this.created = rate.created;
//         // 买家体重:？ 是否合身:？ 身高:？
//         this.extraInfo = rate.extraInfo;
//         // 商品样式 颜色:？ 尺码:？
//         this.style = rate.style;
//         // 买家信息
//         this.user = rate.user;
//         // // 买家头像
//         // this.useravatar 
//         // 评论照片
//         this.images = rate.images;
//         // 商家回复
//         this.explain = rate.explain;

//     }
// }