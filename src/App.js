import React, { Component } from 'react';
import NoteForm from './NoteForm.js';
import NoteCard from './NoteCard.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [{ category:'rocks', title: 'note title here', content: 'note content here. there needs to be room for a lot of extra content, details, content and details.'}],
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
      let className = 'sidebar-category-btn';
      if (this.state.currentCategory === category) {
        className += '-focus'
      }

      return <button
                className={className}
                key={key}
                onClick={() => this.setState({currentCategory: category})}>
                { category }
             </button>
    })
  }

  renderNoteCards() {
    const notes = this.state.notes.filter(note => note.category === this.state.currentCategory)
    console.log(notes)
    return notes.map((note, key) => {
      return <NoteCard {...note} key={key} />
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
          { this.renderNoteCards() }
        </div>
      </div>
    );
  }
  
}

export default App;
