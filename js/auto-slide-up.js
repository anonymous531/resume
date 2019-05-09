!function(){
    let specialTags = document.querySelectorAll('[data-x]')
    for(let i=0;i<specialTags.length;i++){
        specialTags[i].classList.add('offset')
    }
    
    window.addEventListener('scroll',function(){
        findClosestAndRemoveOffset()
    })
    
    function findClosestAndRemoveOffset(){
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for(var i=0;i<specialTags.length;i++){
            if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
                minIndex = i
            }
        }
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector(`a[href="#${id}"]`) //a[href = "#siteAbout"] 
        let allA = document.querySelectorAll('.topNavBar nav ul li.menu>a')
        for(var i=0;i<allA.length;i++){
            allA[i].classList.remove('highlight')
        }
        a.classList.add('highlight')
    }
}.call()