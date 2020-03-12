import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state = {
    // isClicked: false,
    text: "",
    todo: [],
    
  }

  handleClick = event => {
    if (this.state.text.length > 0){
      this.setState(prevState => ({
      todo:[...prevState.todo, this.state.text]
    }))
    this.setState({text: ""})
  }}

  handleDelete = (i) => {
    const todoArr = [...this.state.todo]
    todoArr.splice(i, 1) 
    this.setState({todo: todoArr})
  }

handleText = event => {
  this.setState({text: event.target.value})
}

  render(){
    return (
    <div className="App">
    <Container 
      text = {this.state.text} 
      clicked = {this.handleClick}
      typed = {this.handleText}
      todo = {this.state.todo}
      />
      <ul>
        {this.state.todo.map((item, i) => {
         return (
         <div key={i}>
           <li>{item}</li>
         <button 
         onClick = {() => this.handleDelete(i)}
         >X
         </button>
         </div>
        )})}
      </ul>
    </div>

  );
}}


function Container(props){
  
  return (
    <div>

    
    <div>

     <input onChange = {props.typed} value = {props.text}/>
     <button onClick = {props.clicked}> Submit </button>
    </div>
    </div>
   )     
}


export default App;
