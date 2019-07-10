import React, { Component } from 'react';
import NoteForm from './NoteForm.js'
import './NoteCard.css';

export default class NoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editCard: false,
    }
  }

  handleEditCardStateChange = (e) => {
    e.preventDefault();
    this.setState({ editCard: !this.state.editCard })
  }

  render() {
    return (
      <div className='NoteCard'>
        {
          this.state.editCard ?
          <NoteForm 
            categories={this.props.categories}
            addNewCategoryToState={this.props.addNewCategoryToState} 
            addNewNoteToState={this.props.addNewNoteToState}
            editCardState={this.state.editCard}
            editingCardTitle={this.props.title}
            editingCardContent={this.props.content}
          />
          :
          <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.content}</p>
          </div>
        }
        <button onClick={(e) =>this. props.removeNoteFromState(e, this.props.id)}>delete</button>
        <button onClick={(e) => this.handleEditCardStateChange(e)}>edit</button>
      </div>
    )
  }
}