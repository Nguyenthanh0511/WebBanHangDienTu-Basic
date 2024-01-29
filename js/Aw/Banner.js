 // Your JavaScript code goes here
 var numBanner = 3 // Số lượng hình banner
 for (var i = 1; i <= numBanner; i++) {
     var linkimg = "img/banners/banner" + i + ".png";
     addBanner(linkimg);
 }

 // Kiểm tra xem đã thêm ít nhất một banner trước khi khởi động Owl Carousel
 if (numBanner >= 3) {
     // Khởi động thư viện hỗ trợ banner - chỉ chạy khi đã tạo hình trong banner
     var owl = $('.owl-carousel');
     owl.owlCarousel({
         items: 1.5,
         margin: 100,
         center: true,
         loop: true,
         smartSpeed: 450,
         autoplay: true,
         autoplayTimeout: 3500
     });
 }

 function addBanner(img) {
    var newDiv = `<div class='item'>
                     <a target='_blank' >
                         <img src=` + img + `>
                     </a>
                 </div>`;
     var banner = document.getElementsByClassName('owl-carousel')[0];
     banner.innerHTML += newDiv;
 }