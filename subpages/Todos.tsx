import { useState } from "react";

function TodosPage() {
  const [todos, setTodos] = useState([1, 2]);
  return (
    <main>
      <h1>This is the subpage for Todos</h1>
      <div>
      </div>
    </main>
  );
}

export default TodosPage;
