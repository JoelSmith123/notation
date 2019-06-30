import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
  
        <div className='sidebar'>
          <h1 className='sidebar-title'>notation</h1>

          <form className='sidebar-form'>
            <input
              type='text'
              placeholder='enter title here'>
            </input>
            <textarea
              placeholder='enter note content here'>              
            </textarea>
            <button type='submit'>create note</button>
          </form>

          <nav className='sidebar-nav'>
            
          </nav>
        </div>
  
        <div className='notes-container'>
  
        </div>
      </div>
    );
  }
  
}

export default App;
