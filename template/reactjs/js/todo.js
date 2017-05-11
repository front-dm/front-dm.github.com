var Task = React.createClass({
  render: function () {
    return (
      <li className="task">
        <input className="task-check" type="checkbox"
          defaultChecked={this.props.completed}
          onChange={this.props.onChangeState}
          name="task"/>
        <label className="task-label">{this.props.text}</label>
        <span className="task-delete" onClick={this.props.onDeleteTask}>&times;</span>
      </li>);
  }
});

var TaskList = React.createClass({
  render: function () {
    var changeState = this.props.changeStateTask;
    var deleteTask = this.props.deleteTask;
    var data = this.props.stateFilter();
    return (
      <div>
        {
          data.map(function (task) {
            return (<Task key={task.id} text={task.text}
                          completed={task.completed}
                          onChangeState={changeState.bind(null, task)}
                          onDeleteTask={deleteTask.bind(null, task)}/>
                      );
          })
        }
      </div>);
  }
});

var TaskFilter = React.createClass({
  render: function () {
    return (<div className="filter-select">
                  <span onClick={this.props.filterFlag.bind(null, 'all')}>All</span>
                  <span onClick={this.props.filterFlag.bind(null, 'new')}>New</span>
                  <span onClick={this.props.filterFlag.bind(null, 'completed')}>Completed</span>
            </div>);
  }
});

var TaskEditor = React.createClass({
  render: function () {
    return (
      <form onSubmit={this.props.addTask}>
        <input className="todo-editor" type="search" placeholder="What you need to do?" onChange={this.props.inputTextTask}/>
      </form>
);
  }
});

var TaskApp = React.createClass({
  getInitialState: function () {
    return {
      tasks: [],
      filtered: false
    }
  },

  getTasks: function () {
    var localTasks = JSON.parse(localStorage.getItem('tasks'));
    if (localTasks){
      this.setState({
        tasks: localTasks,
      });
    }
  },

  setTasks: function () {
    var localTasks = JSON.stringify(this.state.tasks);
    localStorage.setItem('tasks', localTasks);
  },

  componentDidMount: function () {
    this.getTasks();
  },

  componentDidUpdate: function () {
    this.setTasks();
  },

  inputTextTask: function (event) {
    this.setState({
      taskText: event.target.value
    });
  },

  addTask: function (event) {
    event.preventDefault();
    var newTasks = this.state.tasks.slice();
    newTasks.unshift({
      id: Date.now(),
      text: this.state.taskText,
      completed: false
    });

    this.setState({
      tasks: newTasks
    });

    document.querySelector('input[type="search"]').value = '';
  },

  changeState: function (task) {
    var tasks = this.state.tasks;
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].id == task.id)
        tasks[i].completed = !task.completed;
    }
    this.setState({
      tasks: tasks
    });
  },

  deleteTask: function (task) {
    if(confirm("Вы хотите удалить задачу?")) {
      var taskId = task.id;
      var newTasks = this.state.tasks.filter(function (task) {
        return taskId !== task.id;
      });
      this.setState({
        tasks: newTasks
      });
    }
  },

  filterFlag: function (state) {
    console.log(state);
    var filteredTasks = [];
    var tempData = [];
    switch (state) {
      case 'all':
          this.setState ({
            filtered: false })
        break;

      case 'new':
          tempData = JSON.parse(localStorage.getItem('tasks'));
          filteredTasks = tempData.filter(function (task) {
          return task.completed == false;
        });
        this.setState ({
          filteredData: filteredTasks,
          filtered: true })
        break;

      case 'completed':
        tempData = JSON.parse(localStorage.getItem('tasks'));
        filteredTasks = tempData.filter(function (task) {
          return task.completed == true;
        });
        this.setState ({
          filteredData: filteredTasks,
          filtered: true })
        break;
    }
    return this.state.filtered ? this.state.filteredData : this.state.tasks;
  },

  render: function () {
    return (
        <div className="todo-app">
          <TaskEditor inputTextTask={this.inputTextTask} addTask={this.addTask} />
          <TaskList tasks={this.state.tasks}
                    changeStateTask={this.changeState}
                    deleteTask={this.deleteTask}
                    stateFilter={this.filterFlag}
                  />
                <TaskFilter filterFlag={this.filterFlag}/>
        </div>);
  }
});

ReactDOM.render(<TaskApp />, document.getElementById('content'));
