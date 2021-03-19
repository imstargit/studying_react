import React from 'react';
import styles from './TodoInput.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const TodoInput = ({value, onChange, onInsert}) =>{
    const handleKeyPress=(e)=>{
        console.log(e.key);
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return (
        <div className={cx('todo-input')}>
            <input className={cx('')} value={value} onChange={onChange} onKeyPress={handleKeyPress} />
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    )
}

export default TodoInput;