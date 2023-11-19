const tipCalculator = () => {
  const inputBill = document.querySelector('#bill-value')
  const inputTip = document.querySelector('#tip-number')
  const inputPeople = document.querySelector('#n-people')

  const tipBtns = document.querySelector('.btns')
  const tipValue = Array.from(document.querySelectorAll('.tip-value'))

  const amount = document.querySelector('#amount')
  const total = document.querySelector('#total')
  const reset = document.querySelector('.reset')

  const errorMessage = document.querySelector('.error-msg')

  document.body.addEventListener('keydown', (event) => {
    if (event.key === '-' || event.key === '0') {
      event.preventDefault()
    }
  })

  const validateInput = () => {
    if (inputPeople.value === '' || inputPeople.value === '0') {
      errorMessage.style.display = 'block'
      inputPeople.classList.add('error')
    } else {
      errorMessage.style.display = 'none'
      inputPeople.classList.remove('error')
    }
  }

  tipValue.forEach((button) => {
    button.addEventListener('click', () => {
      tipValue.forEach((btn) => {
        btn.classList.remove('selected')
      })
      button.classList.add('selected')
    })
  })

  inputTip.addEventListener('blur', () => {
    const tipCustom = Number(inputTip.value)
    const billCustom = Number(inputBill.value)
    const peopleCustom = Number(inputPeople.value)
    const amountCustom = ((billCustom * (tipCustom / 100)) / peopleCustom).toFixed(2)
    const totalCustom = (((tipCustom / 100) * billCustom + billCustom) / peopleCustom).toFixed(2)

    if (
      inputBill.value === '' ||
      inputPeople.value === '' ||
      inputPeople.value === Infinity
    ) {
      amount.textContent = `$0.00`
      total.textContent = `$0.00`
    } else {
      reset.disabled = false
      reset.style.opacity = '1'
      total.textContent = `$${totalCustom}`
      amount.textContent = `$${amountCustom}`
    }
  })

  tipValue.forEach((btn) => {
    btn.addEventListener('click', ({ target }) => {
      validateInput()
      let btn = target.value
      const bill = Number(inputBill.value)
      const people = Number(inputPeople.value)
      const amountValue = ((bill * (btn / 100)) / people).toFixed(2)
      const totalValue = (((btn / 100) * bill + bill) / people).toFixed(2)

      if (
        inputBill.value === '' ||
        inputPeople.value === '' ||
        inputPeople.value === Infinity
      ) {
        amount.textContent = `$0.00`
        total.textContent = `$0.00`
      } else {
        reset.disabled = false
        reset.style.opacity = '1'
        total.textContent = `$${totalValue}`
        amount.textContent = `$${amountValue}`
      }
    })
  })

  const resetInputs = () => {
    reset.addEventListener('click', () => {
      inputBill.value = ''
      inputTip.value = ''
      inputPeople.value = ''
      amount.textContent = '$0.00'
      total.textContent = '$0.00'
      reset.style.opacity = '.25'

      tipValue.forEach((btn) => {
        btn.classList.remove('selected')
      })
    })
  }
  resetInputs()
}
tipCalculator()
