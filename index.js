let colordiv1 = document.querySelector('.clr1')
let colordiv2 = document.querySelector('.clr2')
let inputcolor1 = document.querySelector('#inputcolor1')
let inputcolor2 = document.querySelector('#inputcolor2')
let inputdegree = document.querySelector('#inputdegree')
let copyicon = document.querySelector('#copyicon')
let rsult = document.querySelector('.rsult')
let button = document.querySelector('button')

function updatecolor(){
  document.body.style.background=`linear-gradient(${inputdegree.value}deg,${inputcolor1.value},${inputcolor2.value})`
  rsult.textContent=`linear-gradient(${inputdegree.value}deg,${inputcolor1.value},${inputcolor2.value})`
  colordiv1.style.background=inputcolor1.value
  colordiv2.style.background=inputcolor2.value
}
inputcolor1.addEventListener('input',updatecolor)
inputcolor2.addEventListener('input',updatecolor)
inputdegree.addEventListener('input',updatecolor)


function surpriseme(){
  let hexcodes='0123456789abcdef'
  let code1='#'
  let code2='#'
  for (let i = 0; i < 6; i++) {
    code1+=hexcodes[Math.floor(Math.random()*hexcodes.length)]
    code2+=hexcodes[Math.floor(Math.random()*hexcodes.length)]
    inputdegree.value=Math.floor(Math.random()*360)
  }
  document.body.style.background=`linear-gradient(${inputdegree.value}deg,${code1},${code2})`
  rsult.textContent=`linear-gradient(${inputdegree.value}deg,${code1},${code2})`

  colordiv1.style.background=code1
  colordiv2.style.background=code2
}
button.addEventListener('click',surpriseme)
copyicon.addEventListener('click',()=>{
  navigator.clipboard.writeText(rsult.textContent)
  copyicon.classList.replace('fa-regular','fa-solid')
  setInterval(() => {
  copyicon.classList.replace('fa-solid','fa-regular')
    
  }, 3000);
})
updatecolor()
