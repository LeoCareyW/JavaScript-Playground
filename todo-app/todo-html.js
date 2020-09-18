const todos = [
{
 title: 'Code',
 completed: true
}, {
  title: 'work',
  completed: true
}, {
  title: 'JavaScript',
  completed: false
}, {
  title:'go to the gym',
  completed: false
}, {
  title: 'buy food',
  completed: true
}]

// let uncompleted = 0
// todos.forEach((item) => {
//   if (!item.completed)
//     uncompleted += 1
//   })

tasks = []
  todos.forEach((item) => {
    tasks.push(item.title)
  })

  const incompleteTodos = todos.filter((todo) => {
    return !todo.completed
  })

  const newPara = document.createElement('h2')
    newPara.textContent = `You have ${incompleteTodos.length} tasks left to do.`
    document.querySelector('body').appendChild(newPara)

  tasks.forEach((task, index) => {
    const newPara =  document.createElement('p')
    newPara.textContent = `${index + 1}) ${task}`
    document.querySelector('body').appendChild(newPara)
  })

document.querySelector('#add-todo-button').addEventListener('click', function (e) {
  e.target.textContent = 'Button clicked'
})



// const paras = document.querySelectorAll('p')

// paras.forEach(function (p) {
//   if (p.textContent.includes('the'))
//     p.remove()
// });

// DOM - Document Object Model

// const p = document.querySelector('p')
// p.remove()

// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//   p.textContent = '********'
//   // console.log(p.textContent)
//   // p.remove()
// })

// const newPara = document.createElement('p')
// newPara.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newPara)
