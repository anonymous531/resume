!function(){
    var view = document.querySelector('#mySlides')
    var controller = {
        view: null,
        swiper: null,
        swiperOptions:{
            loop: true, // 循环模式选项
            
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        },
        init:function(view){
            this.view = view
            this.initSwiper()
        },
        initSwiper: function(){
            this.swiper = new Swiper (view.querySelector('.swiper-container'), 
            this.swiperOptions
        )     
        }
    }
    controller.init(view)
    
}.call()

var APP_ID = '1lccnPNQnGWtm0P2eT0bGkkg-gzGzoHsz';
    var APP_KEY = 'vWxBnqjlbeFi5HCoMoFHHIzO';

    AV.init({
    appId: APP_ID,
    appKey: APP_KEY
    });