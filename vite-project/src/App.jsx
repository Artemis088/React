import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {users.length ? (
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
          </div>
        ))
      ) : (
        <h2>Loading Users...</h2>
      )}
    </div>
  );
}

export default App;