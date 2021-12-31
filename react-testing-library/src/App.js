import * as React from 'react'

const App = () => {
  const [search, setSearch] = React.useState('')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const Search = ({ value, onChange, children}) => {
    return (
      <div>
        <label htmlFor="search">{children}</label>
        <input
          id="search"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search: 
      </Search>

      <p>Searches for {search ? search : '...'}</p>
    </div>
  )
}

export default App
