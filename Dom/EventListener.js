 let box = document.querySelector('.bulb')
 let btn = document.querySelector('.btn')
 
 let flag = 0;
 btn.addEventListener('click', function(e){
  if(flag == 0)
  {
  box.style.backgroundColor ='yellow';
  flag++;
  }
  else{
    box.style.backgroundColor ='transparent';
    console.log('Thanks')
    flag--;
  }
 })