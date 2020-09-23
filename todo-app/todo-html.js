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

const filters = {
    searchText: '',
    hideCompleted: false
  }


  const renderTodo = (todos, filters) => {
    let filteredTodo = todos.filter((todo) => {
      return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodo = filteredTodo.filter((todo) => {
      return !filters.hideCompleted || !todo.completed
  })

    const incompleteTodos = filteredTodo.filter((todo) => {
    return !todo.completed
  })

    document.querySelector('#todo').innerHTML = ('')

    const newPara = document.createElement('h2')
      newPara.textContent = `You have ${incompleteTodos.length} tasks left to do.`
      document.querySelector('#todo').appendChild(newPara)

    filteredTodo.forEach((todo) => {
      const element = document.createElement('p')
      element.textContent = todo.title
      document.querySelector('#todo').appendChild(element)
    })
  }
  renderTodo(todos, filters)

  // tasks.forEach((task, index) => {
  //   const newPara =  document.createElement('p')
  //   newPara.textContent = `${index + 1}) ${task}`
  //   document.querySelector('body').appendChild(newPara)
  // })

document.querySelector('#todo-new').addEventListener('submit', (e) => {
  e.preventDefault()
  title = e.target.elements.todoTitle.value
  todos.push({title, completed: false})
  renderTodo(todos, filters)
  e.target.elements.todoTitle.value = ''
})

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodo(todos, filters)
})

  document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodo(todos, filters)
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
