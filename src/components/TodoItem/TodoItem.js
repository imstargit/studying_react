import React,{Component} from 'react';
import styles from './TodoItem.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

class TodoItem extends Component{
    render(){
        
        const {done, onToggle, onRemove, children} = this.props;
        return(
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={(e)=>{onRemove();  e.stopPropagation();}}>[지우기]</div>
            </div>
        )
    }
}

export default TodoItem;