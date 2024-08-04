import React, { useState, useEffect } from "react";
import "./App.css";
import Card, { CardVariant } from "./Components/Card";
import UserList from "./Components/UserList";
import { ITodo, IUser } from "./types/types";
import axios, { Axios } from "axios";
import List from "./Components/List";
import UserItem from "./Components/UserItem";
import TodoItem from "./Components/TodoItem";
import EventsExample from "./Components/EventsExample";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?limit=10"
      );
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="App">
      <EventsExample />

      <Card
        onClick={(num) => console.log(22, num)}
        variant={CardVariant.outlined}
        height="200px"
        width="200px"
      >
        <button>Button</button>
      </Card>

      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />

      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
}

export default App;
