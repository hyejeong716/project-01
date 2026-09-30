/* 
const s2 = document.querySelectorAll('.sec02')

//console.log(section)

// let test1 = new IntersectionObserver(콜백함수,옵션) 기본 if(s2.isIntersecting){
let test1 = new IntersectionObserver((eee)=> {//받은 매개변수를 변수로 인식
  if(eee[0].isIntersecting){ //인식함
    s2.classList.add('active')
  }else{
    s2.classList.remove('active')
  }
},{
  rootMargin: '-30% 0 -30% 0'
})

test1.observe(s2) */

//console.log(section)
// let test1 = new IntersectionObserver(콜백함수,옵션)

const section = document.querySelectorAll('section')
let io = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{
//console.log(entry.target)
    if(entry.isIntersecting){
      console.log(entry.target)
      entry.target.classList.add('active')
    }else{
      entry.target.classList.remove('active')
    }
  })
  
},{
  rootMargin:'-30% 0 -30% 0' //threshold:.5
})

section.forEach((se)=>{
  io.observe(se)
})




