!function(){
    var view = document.querySelector('nav')
    var controller = {
        view: null,
        aTags: null,
        init: function(view){
            this.view = view
            this.aTags = this.view.querySelectorAll('ul>li.menu>a')
            this.initAnimation()
            this.bindEvents()
        },  
        initAnimation:function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function(element){
            let top = element.offsetTop
            let currentTop = window.scrollY
            let targetTop = top -60
            let s = targetTop  - currentTop
            var coords = { y: currentTop}
            var t = Math.abs((s/100)*300)       //每300毫秒走100px
            if ( t>800 ){ t = 800 }
            var tween = new TWEEN.Tween(coords)
            .to( { y:targetTop }, t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function(){
                window.scrollTo(0,coords.y)
            })
            .start()
        },
        bindEvents: function(){
            aTags = this.aTags
            for(var i=0;i<aTags.length;i++){
                aTags[i].onclick = (x)=>{
                    x.preventDefault()
                    let a = x.currentTarget
                    let href = a.getAttribute('href')
                    let element = document.querySelector(href)
                    this.scrollToElement(element) 
                }
            }
        },
    }
    controller.init(view)

}.call()