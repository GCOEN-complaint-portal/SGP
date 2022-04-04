
// JavaScript Begin- 87Lines

$(document).ready(function(){

    $(window).scroll(function(){

        // sticky navbar on scroll - Fixed to Top
        if(this.scrollY > 30){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // slide-up Button
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show") 
        }

    });

    // slide-up - To move to Home Section from Anywhere
    $('.scroll-up-btn').click(function(){
         $('html').animate({ scrollTop: 0});
         $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });


    // toggle menu bar of Navbar Sub-Content on Media Queries
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.navbar .menu i').toggleClass("active");
    });


    //  typing animation for Home Section
    var typed = new Typed(".typing",{
          strings:  [ "Hostel", "Mess", "Teachers", "Senior"],
          typespeed: 160,
          backspeed:60,
          loop: true,
    });

});   