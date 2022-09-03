import React from 'react';
import './App.scss';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoLis'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <h1 className='todo__header'>Task list</h1>
        <ToDoInput />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
