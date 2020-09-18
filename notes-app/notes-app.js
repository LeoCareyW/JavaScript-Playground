// DOM - Document Object Model

// const p = document.querySelector('p')
// p.remove()

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
  p.textContent = '********'
  // console.log(p.textContent)
  // p.remove()
})

const newPara = document.createElement('p')
newPara.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newPara)
