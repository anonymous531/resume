window.onload = function(){
    var pLabel1 = document.getElementById('pLabel1')
    var pLabel2 = document.getElementById('pLabel2')
    var pLabel3 = document.getElementById('pLabel3')
    var portfolioBarInner = document.getElementById('portfolioBar-inner')
    pLabel1.onclick = function(){
        portfolioBarInner.className = 'portfolioBar-inner-1';
    }
    pLabel2.onclick = function(){
        portfolioBarInner.className = 'portfolioBar-inner-2';
    }
    pLabel3.onclick = function(){
        portfolioBarInner.className = 'portfolioBar-inner-3';
    }

    let specialTags = document.querySelectorAll('[data-x]')
    for(let i=0;i<specialTags.length;i++){
        specialTags[i].classList.add('offset')
    }
    var topNavBarInner = this.document.getElementById('topNavBarInner');
    window.onscroll = function(){
        if(window.scrollY>0){
            topNavBarInner.classList.add('active')
        }else{
            topNavBarInner.classList.remove('active')
        }

        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for(var i=0;i<specialTags.length;i++){
            if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
                minIndex = i
            }
        }
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#'+ id +'"]')  //a[href = "#siteAbout"]
        let allA = this.document.querySelectorAll('.topNavBar nav ul li.menu>a')
        for(var i=0;i<allA.length;i++){
            allA[i].classList.remove('highlight')
        }
        a.classList.add('highlight')
        
    }

    let menu = document.getElementsByClassName('menu')
    for(let i=0;i<menu.length;i++){
        menu[i].onmouseenter = function(){
            this.classList.add('active')
            var subMenu = this.getElementsByClassName('subMenu')[0]
            if(subMenu){
                subMenu.classList.add('active')
            }   
        }
        menu[i].onmouseleave = function(){
            this.classList.remove('active')
            var subMenu = this.getElementsByClassName('subMenu')[0]
            if(subMenu){
                subMenu.classList.remove('active')
            }
        }
    }

    let aTag = document.querySelectorAll('nav>ul>li.menu>a')
    for(var i=0;i<aTag.length;i++){
        aTag[i].onclick = function(x){
            x.preventDefault();
            let href = this.getAttribute('href')
            let element = document.querySelector(href)
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
        }
    }

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
   
}