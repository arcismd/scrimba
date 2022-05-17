import {getDiceRollArray} from '/utils.js'

function Character(data) {
    Object.assign(this, data)
    
    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(num){ 
            return  `<div class="dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount } = this;      
        let diceHtml = this.getDiceHtml(diceCount);
        
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`;
    }  
}

export default Character