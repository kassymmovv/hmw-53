import React, {Component} from 'react';
import nanoid from 'nanoid'
import AddTask from "./Components/AddTask/AddTask";
import "./Components/AddTask/AddTask.css"

class App extends Component {
    state = {
            text: '',
        texts:[
            {name: 'wqeqwe', id: nanoid()},
            {name: 'wqeqwe', id: nanoid()},
            {name: 'wqeqwe', id: nanoid()},
        ],

    };
changeText = event => {
    this.setState({text: event.target.value})
};
addText = () => {
    const texts = {
        name: this.state.text,
        id: nanoid()
    };
    this.setState({texts: [...this.state.texts, texts]})
};
    remove = id => {
        const tasks = [...this.state.texts];
        const taskId = tasks.findIndex(t => t.id === id);
        tasks.splice(taskId, 1);
        this.setState({texts:tasks});
        console.log('asagaga')
    };


    render() {
        return (
        <div className="main">
            <input type="text" value={this.state.text} onChange={this.changeText}/>
            <button onClick={this.addText}>Add</button>
            {this.state.texts.map(task => (
                <AddTask
                    text={task.name}
                    key={task.id}
                    removeTask={() => this.remove(task.id)}
                    className="div"

                />
            ))}
        </div>
)

}}

export default App;
