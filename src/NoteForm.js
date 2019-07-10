import React, { Component } from 'react';
import './NoteForm.css';

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

  componentDidMount() {
    this.handleEditCardState()
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

  changeNewNoteCategoryState(e) {
    e.preventDefault();
    this.setState({
      newNote: {
        ...this.state.newNote,
        category: e.target.value
      }
    })
  }

  handleNewCategoryStateChange = (e) => {
    this.setState({
      newCategory: e.target.value
    })
  }
  
  handleEditCardState() {
    if (this.props.editCardState) {
      this.setState({
        newNote: {
          ...this.state.newNote,
          title: this.props.editingCardTitle,
          content: this.props.editingCardContent,
          category: this.props.editingCardCategory,
        }
      })
    }
  }

  handleNewNoteStateChange = (e) => {
    const newNote = {
      ...this.state.newNote,
      [e.target.name]: e.target.value
    }
    this.setState({ newNote })
  }

  handleEditNote = (e) => {
    e.preventDefault();
    this.props.handleEditCardStateChange(e)
    this.props.editNoteInState(e, this.props.editingCardId, this.state.newNote);
  } 

  handleNewNote = (e) => {
    e.preventDefault();
    this.setState({
      newNote: { title: '', content: '', category: '' }
    })
    this.props.addNewNoteToState(e, this.state.newNote)
  }

  submitNewCategory = (e, category) => {
    this.props.addNewCategoryToState(e, category)
    this.changeCategoryOptionsState(e)
    this.setState({ newCategory: '' })
  }

  renderNewCategoryForm() {
    return (
      <div className='new-category-form'>
        <input          
          type='text'
          value={this.state.newCategory}
          onChange={this.handleNewCategoryStateChange}
          placeholder='enter category name'>
        </input>
        <button 
          className='submit-category-btn'
          type='submit'
          onClick={e => this.submitNewCategory(e, this.state.newCategory)}>
          submit new category
        </button>
      </div>
    )
  }

  renderCategoryOptions() {
    if (this.props.categories[1]) {
      return (
        <div>
          <h4>select a category</h4>            
          <select onChange={(e) => this.changeNewNoteCategoryState(e)} value={this.state.newNote.category}>
            {
              this.props.categories.map((category, key) => {
                return <option key={key}>{ category }</option>
              })
            }
          </select>
          <h4>or</h4>
        </div>
      )
    } else {
       return <h4>you don't have any categories yet.</h4>            
    }
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

          { this.state.categoryOptions ? 
              null
            : 
              this.renderCategoryOptions()
          }

          <button
            className='new-category-btn'
            onClick={e => this.changeCategoryOptionsState(e)}>
            { this.state.categoryOptions ? `cancel`
              : `create a new category` }
          </button>

          {
            this.state.categoryOptions ?
            this.renderNewCategoryForm()
            : null
          }

          {
            this.props.editCardState ? 

            <button 
              className='create-note-btn'
              type='submit'
              onClick={e => this.handleEditNote(e)}>
              finish editing note
            </button>

            :

            <button 
              className='create-note-btn'
              type='submit'
              onClick={e => this.handleNewNote(e)}>
              create note
            </button>
          }

  
        </form>
      </div>
    )
  }

}