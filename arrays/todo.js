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

// Convert the array of strings into array of objects
// Create function to remove a todo by text value

const deleteTodo = (array, item) => {
  const index = array.findIndex((todo) => {
    return todo.title.toLowerCase() === item.toLowerCase()
  })
  index >= 0 ? array.splice(index, 1) : null
}

const getUncompleted = (todos) => {
  return todos.filter((todo) => {
    return !todo.completed
  })
}

const sortTodo = (todos) => {
  todos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }
  })
}




// const sortNotes = (notes) => {
//   notes.sort((a, b) => {
//     if (a.title.toLowerCase() < b.title.toLowerCase()) {
//       return -1
//     } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
//       return 1
//     } else {
//       return 0
//     }
//   })
// }


sortTodo(todos)
console.log(todos)

// console.log(getUncompleted(todos))

// deleteTodo(todos, 'code')
// console.log(todos)
