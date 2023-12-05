import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Blog Front End</h1>
      <div>
        {users && (
          <>
            <h2>Users:</h2>
            <ul>
              {users.map((item, index) => (
                <li key={index}>{item.username}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default App;
