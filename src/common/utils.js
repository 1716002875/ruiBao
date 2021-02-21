// 防抖函数
export const debounce = function (func,delay=300){
    let timer = null;
    return function(...args){
      if(timer) clearTimeout(timer);
      timer =setTimeout(() => {
          func.apply()
      },delay)
    }  
  }
  // 单位转为万元，十万
  export const numberFormat = function(value) {
    let unit = '';
      let k = 10000,
        sizes = ['', '万', '亿', '万亿'],
        i;
        if(value < k){
            value =value;
        }else{
            i = Math.floor(Math.log(value) / Math.log(k));
            value = ((value / Math.pow(k, i))).toFixed(2);
            unit = sizes[i];
        }
    return value+unit;
}