const text = document.querySelector('.text')
const btn_1 = document.querySelector('.btn-1')
const btn_2 = document.querySelector('.btn-2')
const btn_3 = document.querySelector('.btn-3')
const bodyCnt = document.querySelector('body')

function colorSwitcher(caption,color, ) {
     text.innerHTML = caption
     bodyCnt.style.backgroundColor = color
     text.style.opacity =1
}


btn_1.addEventListener('click', ()=>{
    colorSwitcher('YOU MEAN THE WORLD TO ME', '#ea1d19', )
    
   
})

btn_2.addEventListener('click', ()=>{
    colorSwitcher('YOU ARE BEAUTIFUL', '#f7f70c' )
    
   
})

btn_3.addEventListener('click', ()=>{
    colorSwitcher('I LOVE YOU EVERYDAY', '#2807ba')
    
   
})
