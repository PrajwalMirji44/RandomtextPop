let btn  = document.querySelector('button')
let main = document.querySelector('main')

btn.addEventListener('click',function(){
   let h1 = document.createElement('h1')

   let arr = ['hello guyzzz','js is Everything','Sheryinas Coding School','JS Learn and finish','Padloo guysxzxz','Lets do ittt mffff','this is gonna crazyyyy']

   let ran = Math.floor(Math.random()*arr.length)
   let x = Math.random()*80
   let y = Math.random()*100
   let rot =  Math.random()*360
   let scl =  Math.random()*2
  
   h1.innerHTML=arr[ran]
   h1.style.color = 'white'
   h1.style.position = 'absolute'

   h1.style.left =x+'%'
   h1.style.top =y+'%'
   h1.style.rotate = rot+'deg'
   h1.style.fontSize = 40+'px'
   h1.style.scale = scl



   main.appendChild(h1)
   
})