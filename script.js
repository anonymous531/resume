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
            subMenu.classList.add('active')
            
        }
        menu[i].onmouseleave = function(){
            this.classList.remove('active')
            var subMenu = this.getElementsByTagName('subMenu')[0]
            subMenu.classList.remove('active')
        }
    }
    
   
}