const tipCalculator = () => {
  const inputBill = document.querySelector("#bill-value")
  const inputTip = document.querySelector("#tip-number")
  const inputPeople = document.querySelector("#n-people")

  const tipBtns = document.querySelector(".btns")
  const tipValue = Array.from(document.querySelectorAll(".tip-value"))

  const amount = document.querySelector("#amount")
  const total = document.querySelector("#total")
  const reset = document.querySelector(".reset")

  const errorMessage = document.querySelector(".error-msg")

  document.body.addEventListener("keydown", (event) => {
    if (event.key === "-") {
      event.preventDefault()
    }
  })

  const validateInput = () => {
    if (inputPeople.value === "" || inputPeople.value === 0) {
      errorMessage.style.display = "block"
      inputPeople.classList.add("error")
    } else {
      errorMessage.style.display = "none"
      inputPeople.classList.remove("error")
    }
  }

  const calculate = () => {
    tipValue.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        validateInput()
        const bill = Number(inputBill.value)
        const tip = Number(inputTip.value)
        const people = Number(inputPeople.value)
        const btn = event.target.value
        const amountValue = (bill * (btn / 100) / people).toFixed(2)
        const totalValue = ((((btn / 100) * bill) + bill) / people).toFixed(2)

        if (inputBill.value === '' || inputPeople.value === '') {
          amount.textContent = `$0.00`
          total.textContent = `$0.00`
        } else {
          total.textContent = `$${totalValue}`
          amount.textContent = `$${amountValue}`
        }
      })
    })
  }
  calculate()

  const resetInputs = () => {
    reset.addEventListener("click", () => {
      inputBill.value = ""
      inputTip.value = ""
      inputPeople.value = ""
      amount.textContent = "$0.00"
      total.textContent = "$0.00"
    })
  }
  resetInputs()
}
tipCalculator()
