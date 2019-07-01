import React, { Component } from 'react';

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryOptions: false,
      newCategoryForm: false,
      newCategory: '',
      newNote: { title: '', content: '', category: '' }
    }
  }

  changeCategoryOptionsState(e) {
    e.preventDefault();
    this.setState({
      categoryOptions: !this.state.categoryOptions
    })
  }

  changeNewCategoryFormState(e) {
    e.preventDefault();
    this.setState({
      newCategoryForm: !this.state.newCategoryForm
    })
  }

  handleNewCategoryStateChange = (e) => {
    this.setState({
      newCategory: e.target.value
    })
  }

  handleNewNoteStateChange = (e) => {
    const newNote = {
      ...this.state.newNote,
      [e.target.name]: e.target.value
    }
    this.setState({ newNote })
  }

  renderExistingCategorySelection() {
    if (this.props.categories[0]) {
      return (
        <select>
          {
            this.props.categories.map((category, key) => {
              return <option key={key}>{ category }</option>
            })
          }
        </select>
      )
    } else {
      return (
        <h2>you don't have any categories yet.</h2>
      )
    }
  }

  renderCategoryOptions() {
    return (
      <div>

        { this.renderExistingCategorySelection() }

        <button
          onClick={e => this.changeNewCategoryFormState(e)}>
          create a new category
        </button>

        { this.state.newCategoryForm ? this.renderNewCategoryForm() : null }

      </div>      
    )    
  }

  renderNewCategoryForm() {
    return (
      <div>
        <input          
          type='text'
          value={this.state.newCategory}
          onChange={this.handleNewCategoryStateChange}
          placeholder='enter category name'>
        </input>
        <button 
          type='submit'
          onClick={e => this.props.addNewCategoryToState(e, this.state.newCategory)}>
          submit new category
        </button>
      </div>
    )
  }

  render() {
    return (
      <div className='NoteForm'>
        <form className='sidebar-form'>
          
          <input
            type='text'
            name='title'
            value={this.state.newNote.title}
            onChange={e => this.handleNewNoteStateChange(e)}
            placeholder='enter title'>
          </input>
  
          <textarea
            name='content'
            value={this.state.newNote.content}
            onChange={e => this.handleNewNoteStateChange(e)}
            placeholder='enter note content'>              
          </textarea>
  
          <button
            onClick={e => this.changeCategoryOptionsState(e)}>
            add a category
          </button>

          { this.state.categoryOptions ? this.renderCategoryOptions() : null}
  
          <button 
            type='submit'
            onClick={e => this.props.addNewNoteToState(e, this.state.newNote)}>
            create note
          </button>
  
        </form>
      </div>
    )
  }

}