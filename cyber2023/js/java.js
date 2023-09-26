document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });
  // signup form toggle



function open_form(){
    window.open("../../html/all-in/form.html");
    document.getElementById("open_form").style.backgroundColor = "#4E9F3D"
    document.getElementById("open_form").innerHTML="Änmalt"
}
function pingis(){
  window.open("../../html/activity/pingis-about.html");
}
function schack(){
  window.open("../../html/activity/schack-about.html");
}
function pilkastning(){
  window.open("../../html/activity/pilkastning-about.html");
}
function spel(){
  window.open("../../html/activity/gaming-about.html");
}
function runing(){
  window.open("../../html/activity/löpning-about.html");
}
function speling(){
  window.open("../../html/activity/rättstavning-about.html");
}
// other functions fror sites
function homaside1(){
  window.open("../../html/activity/pingis-about.html");
}
function homaside2(){
  window.open("../../html/activity/schack-about.html");
}
function homaside3(){
  window.open("../../html/activity/pilkastning-about.html");
}
function homaside4(){
  window.open("../../html/activity/gaming-about.html");
}
function homaside5(){
  window.open("../../html/activity/löpning-about.html");
}
function homaside6(){
  window.open("../../html/activity/rättstavning-about.html");
}

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || 
      document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}