import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {
      completedTodos, 
      totalTodos,
    } = React.useContext(TodoContext);
    
    return (
      /* completed === total?
      <h1 className="TodoCounter">
        Has completado <span>todas</span> las tareas
      </h1>
      : */
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas
      </h1>
    );
  }

  export { TodoCounter };