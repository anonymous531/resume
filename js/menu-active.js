!function(){
    var view = document.getElementsByClassName('menu')
    var controller = {
        view:null,
        init: function(view){
            this.view = view
            this.bindEvents()
        },
        bindEvents: function(){
            this.onMouseenter()
            this.onMouseLeave()
        },
        onMouseenter: function(){
            for(let i=0;i<this.view.length;i++){
                this.view[i].onmouseenter = function(x){
                    var menu = x.currentTarget
                    menu.classList.add('active')
                    var subMenu = menu.getElementsByClassName('subMenu')[0]
                    if(subMenu){
                        subMenu.classList.add('active')
                    }   
                }
            }
        },
        onMouseLeave: function(){
            for(let i=0;i<this.view.length;i++){
                
                this.view[i].onmouseleave = function(x){
                    var menu = x.currentTarget
                    menu.classList.remove('active')
                    var subMenu = menu.getElementsByClassName('subMenu')[0]
                    if(subMenu){
                        subMenu.classList.remove('active')
                    }
                }
            }
        },
    }
    controller.init(view)   
}.call()