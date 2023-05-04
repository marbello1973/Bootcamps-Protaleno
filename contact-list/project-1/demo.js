for (let i = 0; i < 10; i++) {
    console.log(`Me encanta lourdes ${i}`);
  } 

  // let numeros=[1,2,3,4,5,6,7,8,9,10]; 
  // for (let i = 0; i < 10; i++) {
  //   console.log(numeros[i]);
  // }
 
 
 let num=0; 
  while(num <= 10){
    console.log(num++)
    // return num++
  }

// console.log(num)
  

let students = [
  {"name":"david", "nota":3}, 
  {"name":"rafa", "nota":5}, 
  {"name":"lourdes", "nota":9}, 
  {"name":"leonardo", "nota":4}, 
  {"name":"daniel", "nota":6}, 
  {"name":"brayan", "nota":7} 
]
const notas = students.filter(el => el.nota >= 5 ? `Aprobo`:null)
console.log(notas) 





















































