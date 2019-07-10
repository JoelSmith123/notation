import React from 'react';
import './NoteCard.css';

export default function NoteCard(props) {
  return (
    <div className='NoteCard'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={(e) => props.removeNoteFromState(e, props.id)}></button>
    </div>
  )
}