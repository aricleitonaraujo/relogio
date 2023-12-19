
  // seleciona os elementos do html através do ID
const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');


const relogio = setInterval(function time(){
    
    // vai puxar as horas ,minutos e segundos
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg =dateToday.getSeconds();


    // para colocar o zero no relógio

     if( hr < 10) hr =  hr;

     if( min < 10) min = '0' + min;
    
     if(seg < 10) seg = '0' + seg;


   // é para receber a hora, minutos e sgundos 
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})


