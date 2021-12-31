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

  const Search = ({ value, onChange, children }) => {
    return (
      <div>
        <label htmlFor="search">{children}</label>
        <input
          id="search"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search..."
        />
      </div>
    );
  };

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}
      <img alt="profile" />
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p data-testid="search-result">Searches for {search ? search : "..."}</p>
    </div>
  );
};

export default App;
