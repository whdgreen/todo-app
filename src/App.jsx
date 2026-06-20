import { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import './App.css';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <div className="app">
      <h1>待办事项</h1>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入待办事项..."
          className="todo-input"
        />
        <button type="submit" className="add-btn">添加</button>
      </form>

      {todos.length === 0 ? (
        <p className="empty">暂无待办事项</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <label className="todo-label">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className={todo.completed ? 'todo-text done' : 'todo-text'}>
                  {todo.text}
                </span>
              </label>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
