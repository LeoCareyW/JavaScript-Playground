const todos = ['code', 'work', 'code', 'work some more', 'buy food']

todos.splice(2, 1)
todos.push('buy rice')
todos.shift()


todos.forEach((item, index) => {
  console.log(`${index + 1}: ${item}`)
})

for (let count = 0; count < todos.length; count++ ) {
  const num = count + 1
  const todo = todos[count]
  console.log(`${num}: ${todo}`)
}


