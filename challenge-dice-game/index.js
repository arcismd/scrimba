let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1 // 0-5 -> 1-6
    console.log(randomNumber)
    if (player1Turn) {
        console.log("player 1 rolled " + randomNumber)
    } else {
       console.log("player 2 rolled " + randomNumber)
    }
    player1Turn = !player1Turn
})
