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
        document.getElementById('task-input').value = ''
        var tasks = this.state.todos
        var duplicate = false
        //targets the error div to change styling later
        var error = document.getElementById('error-wrap')

        //check tasks for duplicates
        if (tasks.length) {
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i].task === task) {
                    duplicate = true
                }
            }
        }
        if (task && !duplicate) {
          document.getElementsByTagName('form')[0].style.marginBottom = '15px'
          error.style.height = '0px'
          error.style.visibility = 'hidden'
            this.setState({
                todos: this.state.todos.concat({
                    task: task,
                    completed: false,
                    id: this.state.id++
                })
            })
        }
        else if(duplicate){
          document.getElementsByTagName('form')[0].style.marginBottom = '0px'
          error.innerHTML = 'That todo already exists'
          error.style.height = '20px'
          error.style.visibility = 'visible'
        }
        else{
          document.getElementsByTagName('form')[0].style.marginBottom = '0px'
          error.innerHTML = 'field required'
          error.style.height = '20px'
          error.style.visibility = 'visible'
        }
    }

    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter((obj) => {
                if (obj.id === id) {
                    return false
                }
                return true
            })
        })
    }

    render() {
        var todos = this.state.todos.map(obj => {
            return <Task info={{
                task: obj.task,
                completed: obj.completed,
                id: obj.id
            }} key={obj.id} remove={this.removeTodo}/>
        })
        //adjusts page height
        if(todos.length > 9){
          document.getElementsByTagName('body')[0].style.height = 'auto'
        }
        else{
          document.getElementsByTagName('body')[0].style.height = '100vh'
        }
        return (
            <div id="home-wrap">
                <nav>
                    <h1>Todos</h1>
                </nav>
                <form>
                    <input id="task-input" placeholder="new todo"/>
                    <div id="add-button" onClick={() => {
                        this.addTodo(document.getElementById('task-input').value)
                    }}>+</div>
                </form>
                <div id="error-wrap"></div>
                {todos}
            </div>
        )
    }
}
export default Home
