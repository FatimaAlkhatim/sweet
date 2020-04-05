/*global $,alert , console */

$(function(){
   
   'use strict';
   
   // Trigger Nice Scroll Pluging
   
   $('html').niceScroll();
   
   // Change Header Height
   
   $('.header').height($(window).height());
   
   // Scroll To Features
   $('.header .arrow i').click(function(){
    
    $('html, body').animate(
    {
        scrollTop:$('.Features').offset().top
    }, 1000);
    
   });
   
   //Scorll To Our Work

   $('.header  #our').click(function(){
      
              $('html, body').animate(
            {
                scrollTop:$('.our-work').offset().top
            }, 1000);
   });
   
      //Scorll To Our T

   $('.header  #team').click(function(){
      
              $('html, body').animate(
            {
                scrollTop:$('.our-team').offset().top
            }, 1000);
   });
    
   
   // Show Hidden Items From Work
   
    $('.show-more').click(function(){
        $('.our-work .hidden').fadeIn(1000);
    });
    
    /*
    
   $('.show-more').click(function(){
     if($(this).text() === 'show less')
       {
            $('.our-work .hidden').slideUp(2000),
            $(this).text('show more')
       }else
       {
             $('.our-work .hidden').slideDown(2000);
             $(this).text('show less');
       }
   });
   
   */
    
 // Check Testimonials 
    
    var arrowleft  = $('.testim .fa-chevron-left'),
        arrowright = $('.testim .fa-chevron-right');
    
    function checkclients()
    {
        $('.client:first').hasClass('active')?arrowleft.fadeOut():arrowleft.fadeIn();
         
        $('.client:last').hasClass('active')?arrowright.fadeOut():arrowright.fadeIn();
    }
    
    checkclients();
    
    $('.testim i').click(
       function()
        {
            if($(this).hasClass('fa-chevron-right'))
                {
                    $('.testim .active').
                    fadeOut(1000,
                            function()
                            {
                               $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                               
                               checkclients();
                            });
                }
            else
                {
                    $('.testim .active').
                    fadeOut(1000,
                            function()
                            {
                               $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                               
                               checkclients();
                            });
                    
                }
        }
    );
    
     
});