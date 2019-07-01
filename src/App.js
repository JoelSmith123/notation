import React, { Component } from 'react';
import NoteForm from './NoteForm.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      categories: ['Main'],
    }
  }

  render() {
    return (
      <div className="App">
  
        <div className='sidebar'>
          <h1 className='sidebar-title'>notation</h1>
          
          <NoteForm categories={this.state.categories} />

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
