import React, { useEffect } from 'react';
import { useAppSelector, } from '../hooks/hook';
import { useAppDispatch } from '../hooks/hook';
import { addTodoToLS } from '../redux/slices/toDoSlice';
import TodoItem from './TodoItem';



const ToDoLis: React.FC = () => {

    const dispatch = useAppDispatch();
    const todos = useAppSelector(state => state.todoReducer.totdos)

    useEffect(() => {
        const LSTodos = localStorage.getItem('todos')
        LSTodos ? dispatch(addTodoToLS(JSON.parse(LSTodos))) : dispatch(addTodoToLS([]))
    }, [])

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }, [todos])

    return (
        <div className='todo__list'>
            <h2>Tasks</h2>
            <ul className='todo__list-items'>
                {todos.map((item, index) => <TodoItem key={item.id} count={index} {...item} />)}
            </ul>
        </div>
    );
};

export default ToDoLis;

