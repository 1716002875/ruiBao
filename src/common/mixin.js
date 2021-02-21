// 第一次封装
import BScroll from 'better-scroll';
 export const useScroll = function(contentclass,pType,clickType,pullUpType){
    let content =document.querySelector(contentclass)
    const better = new BScroll(content,{
        observeDOM:true,
        useTransition:false,
        probeType:pType,
        click:clickType,
        pullUpload:pullUpType
    });
    better.on('scroll',(position) =>{
        console.log(position);
        
    });
    better.on('pullingUp',()=>{
        console.log('上啦完成');
        setTimeout(()=>{
                better.finishPullUp();
        },2000)
    })
}


// useScroll('参数1','参数2','参数3','参数4')