/ create random number and store as variable between 19-120

// create variable to store players total score
//score starts as 0
var score=0
// generate 4 random variables with a random number assigned to them between 1-12
var clearCrystalRandomNumber = Math.floor(Math.random() * 12) + 1;
var blueCrystalRandomNumber = Math.floor(Math.random() * 12) + 1;
var GreenCrystalRandomNumber = Math.floor(Math.random() * 12) + 1;
var purpleCrystalRandomNumber = Math.floor(Math.random() * 12) + 1;
//two variables to store wins and losses
var userTotal=0;
var wins=0;
var losses=0;
//when the user clicks on a crystal, we want o add the crystalss random number to the total score, we want to check to see if the user has won
//to check if the user has won, if the total score is greater than the random number, player loses, if the random number is equal to the total score random number wins

"#wins").text(wins);
"#losses".text(losses);

nction reset(){
Random=Math.floor(Math.random()*101+19);
console.log(Random)
$("#randomNumber").text(Random);
clearCrystal= Math.floor(Math.random()*11+1);
blueCrystal= Math.floor(Math.random()*11+1);
greenCrystal= Math.floor(Math.random()*11+1);
purpleCrystal= Math.floor(Math.random()*11+1);
userTotal= 0;

$("#bluecrystal").click(function(){
score=score+blueCrystalRandomNumber
if  (score == computerRandomNumber) {
wins++;

}
if (score> computerRandomNumber) {
losses++;

}

})
$("#clearcrystal").click(function(){
score=score+clearCrystalRandomNumber   
if  (score == computerRandomNumber) {
    wins++;   

} 
if (score> computerRandomNumber) {
    losses++;
    
    }
        
})
$("#greencrystal").click(function(){
  score+=GreenCrystalRandomNumber      
  if  (score == computerRandomNumber) {
    wins++;     
         
    
  }
  if (score> computerRandomNumber) {
    losses++;
    
    }
})

$("#purplecrystal").click(function(){
    score+=purpleCrystalRandomNumber        
    if  (score == computerRandomNumber) {
        wins++;
        
    }
    if (score> computerRandomNumber) {
        losses++;
        
        }
            
        
})
