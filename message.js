var APP_ID = '1lccnPNQnGWtm0P2eT0bGkkg-gzGzoHsz';
var APP_KEY = 'vWxBnqjlbeFi5HCoMoFHHIzO';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit',(e)=>{
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
    myForm.querySelector('input[name=content]').value = ''
    })
})

var query = new AV.Query('Message');
query.find().then(function (messages){
    let array = messages.map((item)=>item.attributes)
    array.forEach((item)=>{
        let li = document.createElement('li')
        li.innerText = `${item.name}:${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    })
})

