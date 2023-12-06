/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
    // else {
    // throw new Error("Invalid index. Todo not found.");
    // }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
    // else {
    // throw new Error("Invalid index. Todo not found.");
    // }
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    } else {
      return null;
      // throw new Error("Invalid index. Todo not found.");
    }
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;

// Example usage:
// const todoList = new Todo();
//
// todoList.add("Buy groceries");
// todoList.add("Finish coding assignment");
// console.log(todoList.getAll()); // Output: ['Buy groceries', 'Finish coding assignment']
//
// todoList.update(0, "Buy fresh vegetables");
// console.log(todoList.getAll()); // Output: ['Buy fresh vegetables', 'Finish coding assignment']
//
// todoList.remove(1);
// console.log(todoList.getAll()); // Output: ['Buy fresh vegetables']
//
// console.log(todoList.get(0)); // Output: 'Buy fresh vegetables'
//
// todoList.clear();
// console.log(todoList.getAll()); // Output: []
