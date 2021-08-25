import React from 'react';
import './App.css';
import Article from './components/Article';

class App extends React.Component {

  constructor(props) {
    console.log("[App.js ] constructor")
    super(props)
    this.state = {
      isShow : true,
      article : "Hello World"
    }
    this.onChange = this.onChange.bind(this);
  }
   static getDerivedStateFromProps(pros,state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state; 
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponentUpdate")
    return true;
}

getSnapshotBeforeUpdate (prevProps, prevState){
  console.log("[App.js] getSnapshotBeforeUpdate")
  return { x:0, y: 0}
}

componentDidUpdate (prevProps, prevState, snapshot){
  console.log("[App.js] componentDidUpdate",snapshot)
}
  
  componentDidMount(){
    console.log("[App.js] componentDidMount")
  }

  onChange(){
    this.setState(prevState => ({
      isShow : !prevState.isShow
    }))
  }
  render () {
    console.log("[App.js] getDerivedStateFromProps")
    return (
    <div className="App">
      <button onClick = {this.onChange}> Show/Hide </button> <br/>
      <input value = {this.state.article} onChange = { (e) => this.setState ({article : e.target.value})} />
      { this.state.isShow? <Article article = {this.state.article}/>:null}
    </div> 
    )
  }
}

export default App;
