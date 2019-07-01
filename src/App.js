import React, { Component } from 'react';
import NoteForm from './NoteForm.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      categories: [],
    }
  }

  addNewCategoryToState = (e, category) => {
    e.preventDefault();
    const categories = [...this.state.categories, category]
    this.setState({ categories })
  }

  addNewNoteToState = (e, note) => {
    e.preventDefault();
    const notes = [...this.state.notes, note]
    this.setState({ notes })
  }

  render() {
    return (
      <div className="App">
  
        <div className='sidebar'>
          <h1 className='sidebar-title'>notation</h1>
          
          <NoteForm 
            categories={this.state.categories}
            addNewCategoryToState={this.addNewCategoryToState} 
            addNewNoteToState={this.addNewNoteToState}
          />

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
