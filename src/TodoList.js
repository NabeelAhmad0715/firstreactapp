import React from 'react';

const TodoList = (props) => {
  return (
    <>
      <div className='item-list d-flex'>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
          className='btn btn-danger mr-10'
        >
          X
        </button>
        <li>{props.item}</li>
      </div>
    </>
  );
};
export default TodoList;
