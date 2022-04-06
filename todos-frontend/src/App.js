import TodoForm from "./components/TodoForm";
import DisplayTodos from "./components/DisplayTodos";
import CompletedTodosCount from "./components/CompletedTodosCount";

function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoForm />
        <DisplayTodos />
        <CompletedTodosCount />
      </div>
    </div>
  );
}

export default App;
