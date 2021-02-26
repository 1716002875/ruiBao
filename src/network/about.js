import {request} from '../network/request.js';
export const getCategory = function() {
   return request({
        url : '/category',
    })
};
export const getSubcategory = function(maitKey) {
   return request({
        url : '/subcategory',
        params : {
            maitKey
        }
    })
};
export const getCategoryDetail = function(miniWallkey, type) {
    return request({
        url : "/subcategory/detail",
        params : {
            miniWallkey,
            type
        } 
    })
}
