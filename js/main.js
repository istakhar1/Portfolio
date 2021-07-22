// stiky menu
let nav_hight=$('.header_area').height()+50;

function fixedNavBar(){
    if($('.header_area').length){
        $(window).scroll(function(){
            let scrol=$(window).scrollTop();
            if(scrol>=nav_hight){
                $('.header_area .main-menu').addClass('navbar-fixed');
            }
            else{
                $('.header_area .main-menu').removeClass('navbar-fixed');
            }
        })
    }
}
fixedNavBar();
