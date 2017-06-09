import React, { Component } from 'react'

import './Task.css'

class Task extends Component {
  constructor(props){
    super(props)
    this.state = {
      completed: this.props.info.completed
    }
  }

  toggleCompleted = (task) => {
    var todos = document.getElementsByClassName('task-wrap')
    for(var i = 0; i < todos.length; i++){
      var parent = todos[i]
      var childTask = parent.children[0]
      var completedButton = parent.children[1]
      if(childTask.innerHTML === task){
        if(!this.state.completed){
          childTask.style.textDecoration = 'line-through'
          completedButton.innerHTML = 'Completed'
          completedButton.style.backgroundColor = 'lightgreen'
          this.setState({
            completed: true
          })
        } else {
          childTask.style.textDecoration = 'none'
          completedButton.innerHTML = 'Uncompleted'
          completedButton.style.backgroundColor = 'red'
          this.setState({
            completed: false
          })
        }
      }
    }
  }

  render(){
    return(
      <div className="task-wrap">
        <p>{this.props.info.task}</p>
        <div className="completed-button" onClick={() => {this.toggleCompleted(this.props.info.task)}}>Uncompleted</div>
        <div className="delete-button" onClick={() => {this.props.remove(this.props.info.id)}}>x</div>
      </div>
    )
  }
}
export default Task
