var MovieList = (props) => (
  <div>
    {props.movies.map((movie) =>
      <Movie movie={movie} onTitleClick={props.onTitleClick} watchedCheck={props.watchedCheck} />
    )}
  </div>
)