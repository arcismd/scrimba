function multiply(id, v, unitId) {
    let unitEl = 0
    let newValue = document.getElementById("numberValue").value
    unitEl = newValue
    document.getElementById(id).textContent = (unitEl * v).toFixed(3)
    document.getElementById(unitId).textContent = unitEl
}

function calculateNewValue() {
    multiply("mtof-el", 3.28084, "m-el")
    multiply("ftom-el", 0.3048, "f-el")
    multiply("gtol-el", 3.785, "g-el")
    multiply("ptok-el", 0.453592, "p-el")
    multiply("ltog-el", 0.2641722, "l-el")
    multiply("ktop-el", 2.20462, "k-el")
}