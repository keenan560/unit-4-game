// Cdoe for Wrestler Objs

var hulkHogan = {
    healthPoints: 500,
    attackPower: 10,
    counterAttack: 7 
}

var brettHart = {
    healthPoints: 432,
    attackPower: 8,
    counterAttack: 4
}

var stoneCold = {
    healthPoints: 495,
    attackPower: 9,
    counterAttack: 4
}

var theRock = {
    healthPoints: 398,
    attackPower: 6,
    counterAttack: 7
}

var shawnMichaels = {
    healthPoints: 480,
    attackPower: 8,
    counterAttack: 5
}
var rickFlair = {
    healthPoints: 465,
    attackPower: 4,
    counterAttack: 9
}

var razorRamon = {
    healthPoints: 391,
    attackPower: 6,
    counterAttack: 5
}

var theUndertaker = {
    healthPoints: 415,
    attackPower: 10,
    counterAttack: 5
}


// Code to attack enemy's HealthPoints 


function attack(chosen, enemy) {
    enemy.healthPoints -= chosen.attackPower;
    chosen.healthPoints -= enemy.counterAttack;
}

function attackIncrease(chosen) {
    var base = chosen.attackPower;
    base += chosen.attackPower;
    return base;
}

function updateBattle(chosen, enemy) {
    
}
 
function winBattle(enemy) {
    if (enemy.healthPoints <=0) {
        return true;
    }
    return false;
}

function lostBattle(chosen) {
    if (chosen.healthPoints <=0) {
        return true;
    }
    return false;
}


// Code to make objects appear with images
$("#bret-hp").html("HP: " + brettHart.healthPoints);
$("#shawn-hp").html("HP: " + shawnMichaels.healthPoints);
$("#rick-hp").html("HP: " + rickFlair.healthPoints);
$("#rock-hp").html("HP: " + theRock.healthPoints);
$("#stone-hp").html("HP: " + stoneCold.healthPoints);
$("#hulk-hp").html("HP: " + hulkHogan.healthPoints);
$("#undertaker-hp").html("HP: " + theUndertaker.healthPoints);
$("#razor-hp").html("HP: " + razorRamon.healthPoints);

// ***** Events *****
 
