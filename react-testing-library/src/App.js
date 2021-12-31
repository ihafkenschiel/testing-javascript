import { getSuggestedQuery } from "@testing-library/react";
import * as React from "react";

const getUser = () => Promise.resolve({ id: "1", name: "Robin" });

const App = () => {
  const [search, setSearch] = React.useState("");
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    loadUser();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}
      <img alt="profile" />
      <div>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search..."
        />
      </div>

      <p data-testid="search-result">{`Searches for ${search ? search : "..."}`}</p>
    </div>
  );
};

export default App;
