!function(){
    var view = document.querySelector('#postMessageForm')
    var controller = {
        view:null,
        init: function(view){
            this.view = view
            this.bindEvents()
            this.loadMessage()  
        },
        bindEvents: function(){
            this.view.addEventListener('submit',(e)=>{
                e.preventDefault()
                let name = document.querySelector('input[name=name]').value
                let content = document.querySelector('input[name=content]').value
                var Message = AV.Object.extend('Message');
                var message = new Message();
                message.save({
                'name': name,
                'content':content
                }).then(function(object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}:${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                document.querySelector('input[name=content]').value = ''
                })
            })
        },
        loadMessage: function(){
            var query = new AV.Query('Message');
            query.find().then(function (messages){
            let array = messages.map((item)=>item.attributes)
            array.forEach((item)=>{
                let li = document.createElement('li')
                li.innerText = `${item.name}:${item.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
            })
            },function(error){
            
            })
        },
    }
    controller.init(view)
}.call()