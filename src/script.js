"use strict";

// TODO - write your code here.

const randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const chooseOption = (opt1, opt2) => {
    let randNum = Math.round(Math.random());
    return randNum === 0 ? opt1 : opt2;
}

const attackPlayer = function(health) {
    const damage = (health);
    return health - randomDamage();
}

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

const isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false;
    }
}

function fight(player1, player2, player1Health, player2Health) {
    while(player1Health > 0 && player2Health > 0) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            logDeath(player1, player2);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break
            }
        } else if (attacker === player2) {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            logDeath(player1, player2);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break
            }
        }
    }
}

fight("Chun-Li", "Sagat", 100, 100);