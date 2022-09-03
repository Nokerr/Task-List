import React, { useState } from 'react';

import { useAppDispatch } from '../hooks/hook';
import { addToDo } from '../redux/slices/toDoSlice';

const ToDoInput: React.FC = () => {

    const dispatch = useAppDispatch();

    const [intutValue, setInputValue] = useState('')

    const addTodo = () => {
        dispatch(addToDo(intutValue))
        setInputValue('');
    }

    return (
        <div className="todo__input-block">
            <label htmlFor="todo__input">
                <input
                    type="text"
                    className="todo__input"
                    placeholder='New Todo'
                    value={intutValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <div
                className='todo__button'
                onClick={addTodo}>
                Add task
            </div>
        </div>
    );
};

export default ToDoInput;