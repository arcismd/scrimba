function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function () {
        return Math.floor(Math.random() * 6) + 1
    });
}

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function (num) {
        return `<div class="dice">${num}</div>`
    }).join('')
}

const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1
}

/*
Challenge
1. Create a method called getCharacterHtml that performs the 
   same tasks as our current renderCharacter function.
2. Create two new instances of Character. One for a hero, 
   called "wizard", and one for a monster, called "orc". 
   Render both of them on the page.
3. Delete both the old renderCharacter function and the two 
   lines of code at the bottom of the page which invoke that 
   function.
*/

function Character(data) {
    this.elementId = data.elementId;
    this.name = data.name;
    this.avatar = data.avatar;
    this.health = data.health;
    this.diceCount = data.diceCount;

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount } = this;
        const diceHtml = getDiceHtml(diceCount)

        document.getElementById(elementId).innerHTML =
            `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">    
                ${diceHtml}
            </div>
        </div>`;

    }

}

const wizard = new Character(hero)
const orc = new Character(monster)
wizard.getCharacterHtml()
orc.getCharacterHtml()

