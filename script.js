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
}