import React from 'react';
import './App.css';
import RegisterForm from './Containers/RegisterForm/RegisterForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RegisterForm/>
      </div>
    )
  }
}

export default App;
