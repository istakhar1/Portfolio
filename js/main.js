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


// function closeMenu(){
//     element = document.getElementById('nav_top');
//     if(element){
//       if(element.classList.contains('show')){
//         document.getElementById('navbar_toggler').dispatchEvent(new CustomEvent('click'));
//       }
//     }
//   }
//   $(document).ready(function () {
//     $(document).click(function (event) {
//       closeMenu();
//     });
//   });
// closeMenu();


