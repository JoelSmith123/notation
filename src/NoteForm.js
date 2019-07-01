import React, { Component } from 'react';
import { tsConstructorType } from '@babel/types';

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryOptions: false,
      newCategoryForm: false,
      newCategory: ''
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

  handleNewCategoryChange = (e) => {
    this.setState({
      newCategory: e.target.value
    })
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
          onChange={this.handleNewCategoryChange}
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
            placeholder='enter title'>
          </input>
  
          <textarea
            placeholder='enter note content'>              
          </textarea>
  
          <button
            onClick={e => this.changeCategoryOptionsState(e)}>
            add a category
          </button>

          { this.state.categoryOptions ? this.renderCategoryOptions() : null}
  
          <button type='submit'>create note</button>
  
        </form>
      </div>
    )
  }

}