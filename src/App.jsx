import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="app">
      <h1>待办事项</h1>
      <button onClick={() => addTodo('测试事项')}>添加测试</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
              {t.text} (完成: {String(t.completed)})
            </span>
            <button onClick={() => toggleTodo(t.id)}>切换</button>
            <button onClick={() => deleteTodo(t.id)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
