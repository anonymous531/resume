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

    var topNavBarInner = this.document.getElementById('topNavBarInner');
    window.onscroll = function(){
        if(window.scrollY>0){
            topNavBarInner.classList.add('active')
        }else{
            topNavBarInner.classList.remove('active')
        }
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
            window.scrollTo(0,top-60)
        }
    }
   
}