import React from 'react';
import { useAppDispatch } from '../hooks/hook';
import { removeToDo, toggleTodo } from '../redux/slices/toDoSlice'

interface ToDoItemProps {
    id: string
    count: number,
    text: string,
    complited: boolean
}

const TodoItem: React.FC<ToDoItemProps> = ({ id, count, text, complited }) => {

    const dispatch = useAppDispatch()

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
                >{`  ${count}.  ${text}`}.</div>
            </div>
            <div
                className='right-part'
                onClick={() => dispatch(removeToDo(id))}>
                Del
            </div>
        </li>
    );
};

export default TodoItem;