import React from 'react';

export default function NoteForm(props) {
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
        <button type='submit'>create note</button>
      </form>
    </div>
  )
}