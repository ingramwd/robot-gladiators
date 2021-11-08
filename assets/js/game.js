// Game States
// "Win" player robot has defeated all enemy-robots
//          fight all enemy robots
//          defeat each enemey robot
// "Lose" player robots's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames, enemyAttack, enemyHealth)

// sets up function
var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");

var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if a player fights
if (promptFight === "fight" || promptFight === "FIGHT") { 
 //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
 
 enemyHealth = enemyHealth - playerAttack;
    
 console.log(
   playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining. "
 );

 //   checking enemy health 

 if (enemyHealth <= 0) {
     window.alert(enemyNames + " has died!");
 }

 else {
     window.alert(enemyNames + " still has " + enemyHealth + " health left.");
 }

 // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
   playerHealth = playerHealth - enemyAttack
 // Log a resulting message to the console so we know that it worked.
   console.log (
       enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
   );

   if (playerHealth <= 0) {
   window.alert(playerName + " has died!");
   } 
   else {
   window.alert(playerName + " still has " + playerHealth + " health left.");
   }


//    if skip is chosen
}   else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if you (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false) as question again by running fight() again
    else (
        fight ()
    )

    window.alert(playerName + " has chosen to skip the fight!");
}
    else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

// executes the function
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}