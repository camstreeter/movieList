var MovieList = (props) => (
  <div>
    {props.movies.map((movie) =>
      <Movie movie={movie} watchedCheck={props.watchedCheck} />
    )}
  </div>
)