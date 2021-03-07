import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
    console.log(this.state.tasks);
  };

  deleteTask = (e) => {
    console.log(e.target.parentNode.id);
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        console.log(task.id);
        return task !== e.target.parentNode.id;
      }),
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            type="text"
            onChange={this.handleChange}
            id="taskInput"
            value={this.state.task}
          />
          <button type="submit">Add task</button>
        </form>
        <Overview tasks={this.state.tasks} onDeleteButton={this.deleteTask} />
      </div>
    );
  }
}

export default App;
