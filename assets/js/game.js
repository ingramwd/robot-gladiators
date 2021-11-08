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

var pickedEnemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(pickedEnemyNames.length);
for(var i = 0; i < pickedEnemyNames.length; i++) {
    console.log(pickedEnemyNames[i]);
    console.log(i);
    console.log(pickedEnemyNames[i] + " is at " + i + " index");
}
var enemyHealth = 50;
var enemyAttack = 12;

console.log(pickedEnemyNames, enemyAttack, enemyHealth)

// sets up function
var fight = function(pickedEnemyNames) {
    // this will repeat as long as an emeny is alive
    while(enemyHealth > 0) {
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if a player fights
if (promptFight === "fight" || promptFight === "FIGHT") { 
 //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
 
 enemyHealth = enemyHealth - playerAttack;
    
 console.log(
   playerName + " attacked " + pickedEnemyNames + ". " + pickedEnemyNames + " now has " + enemyHealth + " health remaining. "
 );

 //   checking enemy health 

 if (enemyHealth <= 0) {
     window.alert(pickedEnemyNames + " has died!");
 }

 else {
     window.alert(pickedEnemyNames + " still has " + enemyHealth + " health left.");
 }

 // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
   playerHealth = playerHealth - enemyAttack
 // Log a resulting message to the console so we know that it worked.
   console.log (
       pickedEnemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
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

    }

// executes the function
for(var i = 0; i < pickedEnemyNames.length; i++) {
    enemyHealth =50;
    fight(pickedEnemyNames[i]);
}