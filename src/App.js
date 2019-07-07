import React, { Component } from 'react';
import NoteForm from './NoteForm.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      categories: ['--categories--', 'rocks', 'trees', 'owls'],
      currentCategory: '',
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

  renderSidebarCategoryButtons() {
    const categories = this.state.categories.slice(0);
    categories.shift();
    return categories.map((category, key) => {
      return <button
                className='sidebar-category-btn'
                key={key}
                onClick={() => this.setState({currentCategory: category})}>
                { category }
             </button>
    })
  }

  render() {
    return (
      <div className="App">
  
        <div className='sidebar'>
          <div className='sidebar-forms'>
            <h1 className='sidebar-title'>notation</h1>
            
            <NoteForm 
              categories={this.state.categories}
              addNewCategoryToState={this.addNewCategoryToState} 
              addNewNoteToState={this.addNewNoteToState}
            />
          </div>

          <nav className='sidebar-nav'>
            { this.renderSidebarCategoryButtons() }
          </nav>
        </div>

        <div className='notes-container'>
          
        </div>
      </div>
    );
  }
  
}

export default App;
