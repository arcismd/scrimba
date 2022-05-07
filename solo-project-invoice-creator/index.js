const washCarEl = document.getElementById("washCar-el") 
const mowLawNeL = document.getElementById("mowLawn-el") 
const pullWeeds = document.getElementById("pullWeeds-el") 
let sendEl = document.getElementById("send-el")
let serviceTextEl = document.getElementById("serviceText-el")
let sumEl = document.getElementById("sum-el")
let sum = 0

addService(washCarEl, 'Wash Cars', 10)
addService(mowLawNeL, 'Mow Lawn', 20)
addService(pullWeeds, 'Pull Weeds', 30)

sendEl.addEventListener('click', function() {
    sumEl.innerHTML = ""
    serviceTextEl.innerHTML = ""
})

function addService(id, service, price) {
    id.addEventListener('click', function() {
        sum += price
        serviceTextEl.innerHTML += 
        `
        <div class="services-text">
            <div class="left">
            ${service}
            </div>
            <div class="right">
            $<span>${price}</span>
            </div>
        </div>
        `
        sumEl.innerHTML = 
        `
        <div class="third-text">
            <div class="left">
            We accept cash, credit card, or PayPal
            </div>
            <div class="right">
            $${sum}
            </div>
        </div>
        `
    }, {once : true})
}