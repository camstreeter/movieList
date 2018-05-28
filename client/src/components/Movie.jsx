var Movie = (props) => (
  <div>{props.movie.title} | Watched <input onClick={(event) => props.watchedCheck(event)} id={props.movie.title} type="checkbox"/></div>  
)