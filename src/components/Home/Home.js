import React, {Component} from 'react'

import Task from '../Task/Task'

import './Home.css'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            todos: []
        }
    }

    addTodo = (task) => {
      console.log(task)
      document.getElementById('task-input').value = ''
      this.setState({
        todos: this.state.todos.concat({task: task, completed: false, id: this.state.id++})
      })
    }

    removeTodo = (id) => {
      this.setState({
        todos: this.state.todos.filter((obj) => {
          if(obj.id === id){
            return false
          }
          return true
        })
      })
    }

    render() {
      var todos = this.state.todos.map(obj => {
        return <Task  info={{task: obj.task, completed: obj.completed, id: obj.id}} key={obj.id} remove={this.removeTodo}/>
      })
        return (
            <div id="home-wrap">
                <nav>
                    <h1>Todos</h1>
                </nav>
                <form>
                    <input id="task-input" placeholder="new todo"/>
                    <div id="add-button" onClick={() => {this.addTodo(document.getElementById('task-input').value)}}>+</div>
                </form>
                {todos}
            </div>
        )
    }
}
export default Home
