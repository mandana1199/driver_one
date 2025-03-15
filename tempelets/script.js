$(document).ready(function(){

 $(".writting").click(function(){
   $(".sub-one").slideToggle();
     });
  
$(".but-span").click(function(){
  $(".sub-one").slideToggle();
   });

$(".userss").click(function(){
  $(".sub-two").slideToggle();
   });
        
$(".but-span-two").click(function(){
  $(".sub-two").slideToggle();
    });
        
$(".li-menu-setting").click(function(){
  $(".sub-three").slideToggle();
    });     

$(".but-span-three").click(function(){
  $(".sub-three").slideToggle();
  });  
 
$("#opensidebarmenu").click(function(){
  $("#sidebarmenu").toggle();
   }); 
   
     });  
     

 var butspan = document.querySelector('.but-span');
 var q;
 butspan.addEventListener('click', function(){
  if (q === undefined ){
    q = butspan.style.transform;
  }
  if(butspan.style.transform === q){
    butspan.style.transform = 'rotate(-90deg)';
  }
  else{butspan.style.transform = q}
 })    


 var butspantwo = document.querySelector('.but-span-two');
 var q;
 butspantwo.addEventListener('click', function(){
  if (q === undefined ){
    q = butspantwo.style.transform;
  }
  if(butspantwo.style.transform === q){
    butspantwo.style.transform = 'rotate(-90deg)';
  }
  else{butspantwo.style.transform = q}
 })    


 var butspanthree = document.querySelector('.but-span-three');
 var q;
 butspanthree.addEventListener('click', function(){
  if (q === undefined ){
    q = butspanthree.style.transform;
  }
  if(butspanthree.style.transform === q){
    butspanthree.style.transform = 'rotate(-90deg)';
  }
  else{butspanthree.style.transform = q}
 })  

 
 const searchbtn = document.querySelector('.search-i');
 const searchbox = document.querySelector('.search-box');

 searchbtn.addEventListener('click', () => {
  searchbox.classList.toggle("active");
 })

 const inputt = document.querySelector('input');
 searchbtn.addEventListener('click', () => {
  inputt.classList.toggle("active");
 })

 searchbtn.addEventListener('click', () => {
  searchbtn.classList.toggle("active");
 })

 const btnclose = document.querySelector('.btn-close');
 btnclose.addEventListener('click', () => {
  searchbox.classList.toggle("active");
    });

searchbox.addEventListener('click', () => {
btnclose.classList.toggle("active");
  })

btnclose.addEventListener('click', () => {
searchbtn.classList.toggle("active");
   });

const twoicon = document.querySelector('.two-i');
searchbtn.addEventListener('click', () => {
  twoicon.classList.toggle("active");
 });

 btnclose.addEventListener('click', () => {
  twoicon.classList.toggle("active");
 });
      