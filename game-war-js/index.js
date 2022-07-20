let deckId

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}document.getElementById('draw-cards').addEventListener('click', () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
})

document.getElementById("new-deck").addEventListener("click", handleClick)