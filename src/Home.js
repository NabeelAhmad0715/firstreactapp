import React, { useState } from 'react';
import TodoList from './TodoList';
const Home = () => {
  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const deleteItem = (id) => {
    console.log('deleted');
    setItems((oldItems) => {
      return oldItems.filter((array, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <br />
          <h1>To Do List</h1>
          <br />
          <div className='center d-flex'>
            <input
              type='text'
              value={inputList}
              onChange={itemEvent}
              placeholder='Add a Item'
            />
            <br />
            <button onClick={listItems} className='btn btn-success'>
              Add
            </button>
          </div>
        </div>
      </div>
      <ol>
        {items.map((item, index) => {
          return (
            <TodoList
              key={index}
              id={index}
              onSelect={deleteItem}
              item={item}
            />
          );
        })}
      </ol>
    </>
  );
};
export default Home;
