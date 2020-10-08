var damageEle = document.body.querySelector(".damage");
var dragonEle = document.body.querySelector(".dragon");
var WinnerEle = document.body.querySelector(".Winner");

var fire = 3;
var ice = 1;
var poison = 4;
var dragon = 0;


function dragonDamage(damage, attack){
   if (attack == "fire"){
     
  dragon=dragon + damage -1;}
  else if (attack =="ice"){
    dragon= dragon + damage + 1;
  }
  else { dragon = dragon + damage;
       }
  dragonEle.innerHTML = "Dragon Damage"+dragon;
  
   if (dragon >= 10){
WinnerEle.innerHTML = "You Win";}
    
  
}
document.body.querySelector(".Fire").addEventListener("click",function(){
  dragonDamage(3, "fire" );
});

document.body.querySelector(".Ice").addEventListener("click",function(){
  dragonDamage(1, "ice" );
});

document.body.querySelector(".Poison").addEventListener("click",function(){
  dragonDamage(4, "poison" );
});