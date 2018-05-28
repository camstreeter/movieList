var Search = (props) => (
  <div>
    <input onChange={(event) => props.onSearch(event)} type="search"/>
    <button onClick={props.handleSearch}>Search</button>
  </div>  
)