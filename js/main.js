/*global $ , alert , console*/

$(function(){
    'use strict';
    
    $('.carousel-item img').height($(window).height());
    
    // scroll to features
    $('.nav-link').click(function(){
       
        $('html, body').animate({
            
            scrollTop: $('#content').offset().top
            
        }, 1000);
        
    });
});