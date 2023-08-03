
var img =document.querySelector('.main')
var imgList = ['imag/1.jpg', 'imag/2.jpg', 'imag/3.jpg', 'imag/4.jpg']
var imgNo = 0;

let sliderinterval = setInterval(imgeSlider, 1000)

function imgeSlider(){
 if(imgNo<imgList.length)
 {
  img.setAttribute('src',imgList[imgNo]);
  imgNo++;
 }
 else{
  imgNo =0;
 }
}


img.addEventListener('mouseover',function(e){
  clearInterval(sliderinterval)
})


img.addEventListener('mouseout',function(e){
  sliderinterval = setInterval(imgeSlider, 1000)
})


