import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/actions';

let AddItem = ({ dispatch }) => {
  let input;

  return (
	<div>
	  <input ref={node => {
		input = node;
	  }} />
	  <button onClick={() => {
		dispatch(addItem(input.value));
		input.value = '';
	  }}>
		Add Todo
	  </button>
	</div>
  )
}
AddItem = connect()(AddItem);
export default AddItem;