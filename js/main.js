/**
 * Created by JOYE on 2016/9/17.
 */
'use strict';

$(function(){
    //获取屏幕的宽度
    var windowWidth = $(window).width();
    var isSmallScreen = windowWidth < 768;

    $('#main_ad > .carousel-inner > .item').each(function(i,item){

        var $item = $(item);
        var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
        $item.css('backgroundImage','url("'+ imgSrc +'")');
    });

})
