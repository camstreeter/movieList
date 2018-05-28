var Movie = (props) => (
  <div>
    <div className="title" id={props.movie.title} onClick={(event) => props.onTitleClick(event)}>{props.movie.title}</div>
    <div className="info">Release Date: {props.movie.release_date} | Overview: {props.movie.overview} | Vote Average: {props.movie.vote_average} | Watched <input onClick={(event) => props.watchedCheck(event)} id={props.movie.title} type="checkbox"/></div>
  </div>  
)