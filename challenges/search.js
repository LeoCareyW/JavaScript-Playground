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

// Create new div to hold the todos
// Set up filters (searchText) wire up new filter input to change it
// create a renderTodos function to render and rerender the latest filtered data

tasks = []
  todos.forEach((item) => {
    tasks.push(item.title)
  })

  const incompleteTodos = todos.filter((todo) => {
    return !todo.completed
  })


  const newPara = document.createElement('h2')
    newPara.textContent = `You have ${incompleteTodos.length} tasks left to do.`
    document.querySelector('h3').appendChild(newPara)




  // tasks.forEach((task, index) => {
  //   const newPara =  document.createElement('p')
  //   newPara.textContent = `${index + 1}) ${task}`
  //   document.querySelector('body').appendChild(newPara)
  // })

document.querySelector('#add-todo-button').addEventListener('click', function (e) {
  e.target.textContent = 'Button clicked'
})

document.querySelector('#add-todo').addEventListener('input', (e) => {
  console.log(e.target.value)
})























//   const filters = {
//     searchText: ''
//   }

//   const renderTodo = (todos, filters) => {
//     const filteredTodo = todos.filter((todo) => {
//       return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
//     })
//     document.querySelector('#todo').innerHTML = ('')

//     filteredTodo.forEach((todo) => {
//       const element = document.createElement('p')
//       element.textContent = todo.title
//       document.querySelector('#todo').appendChild(element)
//     })
//   }

// .
// .
// .
// .


// renderTodo(todos, filters)


// document.querySelector('#search-text').addEventListener('input', (e) => {
//   filters.searchText = e.target.value
//   renderTodo(todos, filters)
// })




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
