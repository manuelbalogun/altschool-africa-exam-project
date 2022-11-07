import { useState, useEffect } from "react";
import Loading from "./Loading";
import Profile from "./Profile";
import {Suspense} from "react";

function App() {
  const [items, setItems] = useState([]);

  const [user] = useState("manuelbalogun");

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=15&sort=updated`
      );
      const data = await res.json();
      setItems(data);
      console.log(data);
    };

    fetchRepos();
  }, [user]);

  return (
    <>
      <div>
        <h1 className="welcome-text">
          Welcome to Ayodeji Balogun ({user})'s Github portfolio
        </h1>
      </div>

      {!items ? (
        <Loading />
      ) : (
          <div>
            {items.map((item) => (
              <Profile key={item.id} {...item} />
            ))}
          </div>
      )}
    </>
  );
}

export default App;
