var AddMovie = (props) => (
  <div>
    <input onChange={(event) => props.onAdd(event)} type="text" id="addMovie" name="addMovie"/>
    <button onClick={props.handleAdd}>Add</button>
  </div>
)