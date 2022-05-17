function getDiceRollArray(diceCount) {  
    return new Array(diceCount).fill(0).map(function(){
    return Math.floor(Math.random() * 6) + 1
    });   
}

export {getDiceRollArray}