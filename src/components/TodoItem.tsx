import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { removeToDo, toggleTodo } from '../redux/slices/toDoSlice'

interface ToDoItemProps {
    id: string
    count: number,
    text: string,
    complited: boolean
}

const TodoItem: React.FC<ToDoItemProps> = ({ id, count, text, complited }) => {

    const dispatch = useAppDispatch()
    const todos = useAppSelector(state => state.todoReducer.totdos)

    const remouveItem = () => {
        dispatch(removeToDo(id))
        if (todos.length) {
            localStorage.setItem('todos', JSON.stringify([]))
        }
    }

    return (
        <li>
            <div className={complited ? 'left-part crossed' : 'left-part'}>
                <input
                    type="checkbox"
                    checked={complited}
                    onChange={() => dispatch(toggleTodo(id))}
                />
                <div
                    className='todo__text'
                    onClick={() => dispatch(toggleTodo(id))}
                >{`  ${count + 1}.  ${text}`}.</div>
            </div>
            <div
                className='right-part'
                onClick={remouveItem}>
                Del
            </div>
        </li>
    );
};

export default TodoItem;