let passL = 8

let eight = document.getElementById("eight-el")
eight.addEventListener("click", () => {
    passL = 8
})

let ten = document.getElementById("ten-el")
ten.addEventListener("click", () => {
    passL = 10
})

let twelve = document.getElementById("twelve-el")
twelve.addEventListener("click", () => {
    passL = 12
})

let Buttons = document.querySelectorAll(".selectSection button")
for (let button of Buttons) {
  button.addEventListener("click", (e) => {
    const et = e.target
    const active = document.querySelector(".active")
    if (active) {
      active.classList.remove("active")
    }
    et.classList.add("active")
  })
}

function newPass() {
    generatePass("pass-el")
    generatePass("s-pass-el")
    generatePass("t-pass-el")
    generatePass("f-pass-el")
} 

function generatePass(id) {
    let passCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?)(&^%$#><"
    let password = ""
    let passEl = document.getElementById(id)
    for (let i = 0, v = passCharset.length; i < passL; i++) {
       password += passCharset.charAt(Math.floor(Math.random() * v))
    } 
    passEl.textContent = password
}