import React, { Component } from 'react';
import { tsConstructorType } from '@babel/types';

export default class NoteForm {
  constructor(props) {
    super(props);
    this.state = {
      displayCategoryOptions: false;
    }
  }

  render() {
    return (
      <div className='NoteForm'>
        <form className='sidebar-form'>
          
          <input
            type='text'
            placeholder='enter title here'>
          </input>
  
          <textarea
            placeholder='enter note content here'>              
          </textarea>
  
          <button>add a category</button>
  
          <select>
            {
              this.props.categories.map((category, key) => {
                return <option key={key}>{ category }</option>
              })
            }
          </select>
  
          <button type='submit'>create note</button>
  
        </form>
      </div>
    )
  }

}