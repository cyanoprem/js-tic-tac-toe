const buttons = document.querySelectorAll('button')
let currentPlayer = 'X'
let resetBtn = document.getElementById('reset-btn')
let gameStatus = document.getElementById('game-status')


const changePlayer = () => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
    gameStatus.innerText = `Current Player : ${currentPlayer}`
  } else {
    currentPlayer = 'X'
    gameStatus.innerText = `Current Player : ${currentPlayer}`
  }
}

const addXorO = (num) => {
  if (buttons[num].innerText === '') {
    buttons[num].innerText = currentPlayer
    changePlayer()
  }
}

const resetGame = () => {
  for (let i = 0; i <= 8; i++) {
    buttons[i].innerText = ''
  }
  currentPlayer = 'X'
  gameStatus.innerText = 'Current Player : X'
}

const isWon = () => {

  if (buttons[0].innerText !== '') {
    console.log(0)
    if (buttons[0].innerText === buttons[1].innerText && buttons[0].innerText === buttons[2].innerText) {
      setTimeout(() => {
        alert(`${buttons[0].innerText} is the winner`)
        resetGame()
      })
    } else if (buttons[0].innerText === buttons[3].innerText && buttons[0].innerText === buttons[6].innerText) {
      setTimeout(() => {
        alert(`${buttons[0].innerText} is the winner`)
        resetGame()
      })
    } else if (buttons[0].innerText === buttons[4].innerText && buttons[0].innerText === buttons[8].innerText) {
      setTimeout(() => {
        alert(`${buttons[0].innerText} is the winner`)
        resetGame()
      })
    }
  }

  if (buttons[1].innerText !== '') {
    if (buttons[1].innerText === buttons[4].innerText && buttons[1].innerText === buttons[7].innerText) {
      setTimeout(() => {
        alert(`${buttons[1].innerText} is the winner`)
        resetGame()
      })
    }
  }

  if (buttons[2].innerText !== '') {
    if (buttons[2].innerText === buttons[4].innerText && buttons[2].innerText === buttons[6].innerText) {
      setTimeout(() => {
        alert(`${buttons[2].innerText} is the winner`)
        resetGame()
      })
    } else if (buttons[2].innerText === buttons[5].innerText && buttons[2].innerText === buttons[8].innerText) {
      setTimeout(() => {
        alert(`${buttons[2].innerText} is the winner`)
        resetGame()
      })
    }
  }

  if (buttons[3].innerText !== '') {
    if (buttons[3].innerText === buttons[4].innerText && buttons[3].innerText === buttons[5].innerText) {
      setTimeout(() => {
        alert(`${buttons[3].innerText} is the winner`)
        resetGame()
      })
    }
  }

  if (buttons[6].innerText !== '') {
    if (buttons[6].innerText === buttons[7].innerText && buttons[6].innerText === buttons[8].innerText) {
      setTimeout(() => {
        alert(`${buttons[6].innerText} is the winner`)
        resetGame()
      })
    }
  }

  let count = 0
  for (let i = 0; i <= 8; i++) {   
    if (buttons[i].innerText !== '') {
      count += 1
    }
  }
  if (count === 9) {
    setTimeout(() => {
      alert('Draw')
      resetGame()
    })
  }
  
}

buttons[0].addEventListener('click', () => {
  addXorO(0)
  isWon()
})

buttons[1].addEventListener('click', () => {
  addXorO(1)
  isWon()
})

buttons[2].addEventListener('click', () => {
  addXorO(2)
  isWon()
})

buttons[3].addEventListener('click', () => {
  addXorO(3)
  isWon()
})

buttons[4].addEventListener('click', () => {
  addXorO(4)
  isWon()
})

buttons[5].addEventListener('click', () => {
  addXorO(5)
  isWon()
})

buttons[6].addEventListener('click', () => {
  addXorO(6)
  isWon()
})

buttons[7].addEventListener('click', () => {
  addXorO(7)
  isWon()
})

buttons[8].addEventListener('click', () => {
  addXorO(8)
  isWon()
})

resetBtn.addEventListener('click', () => resetGame())