
// $('li').on('click',function(){
//     position = $(this).attr('class');
//     $('.box').css('background-position',position);
// });
let li;
li = document.getElementsByTagName('li');
li.addEventListener('click',function(e){
  let position1;
  let position2;
  let class1;
  
  class1 = this.parentElement.getAttribute('class');
    if(class1=='btn1'){
        position1 = this.getAttribute('class');
    }
    console.log(class1);
});