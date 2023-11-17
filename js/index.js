const tipCalculator = () => {
  const inputBill = document.querySelector('#bill-value')
  const inputTip = document.querySelector('#tip-number')
  const inputPeople = document.querySelector('#n-people')

  const bill = inputBill.value
  const tip = inputTip.value
  const people = inputPeople.value

  const tipBtns = document.querySelector('.btns')
  const tipValue = Array.from(document.querySelectorAll('.tip-value'))
  const fiveTip = tipBtns[0]
  const tenTip = tipBtns[1]
  const fifteenTip = tipBtns[2]
  const twentyFive = tipBtns[3]
  const fifty = tipBtns[4]

  const amount = document.querySelector('#amount')
  const total = document.querySelector('#total')
  const reset = document.querySelector('.reset')

  const errorMessage = document.querySelector('.error-msg')

  document.body.addEventListener('keydown', event => {
    if (event.key === '-') {
      event.preventDefault()
    }
  })

  const validateInput = () => {
    if (people === '' || people === 0) {
      errorMessage.style.display = 'block'
      inputPeople.classList.add('error')
    } else {
      errorMessage.style.display = 'none'
      inputPeople.classList.remove('error')
      
      showResult()
    }
  }

  const calculate = () => {
    const resultAmount = () => {
      tipValue.forEach(value => {
        value.addEventListener('click', event => {
          const tipBtnValue = event.target
          return tipBtnValue
        })
      })
      console.log(tipValue)
    }
  }

  const showResult = () => {
    document.body.addEventListener('click', () => {
      validateInput()
      calculate()
    })
  }
  showResult()
}
tipCalculator()

