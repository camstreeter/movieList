class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      movieToAdd: '',
      query: '',
      watchedMovies: [],
      toWatchMovies: [],
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
    this.handleToWatch = this.handleToWatch.bind(this);
    this.watchedCheck = this.watchedCheck.bind(this);
    this.onTitleClick = this.onTitleClick.bind(this);
  }
  
  onTitleClick(event) {
    var title = event.target.id;
    var query = event.target.id.split(' ').join('+');
    var currMovies = this.state.movies;
    this.setState = this.setState.bind(this)
    console.log(query)
    $.ajax({
      contentType: "application/json",
      method: "GET",
      url: 'https://api.themoviedb.org/3/search/movie?api_key=' + API.key + '&query=' + query,
      data: {},
      success: function(data) {
        console.log('successful GET')
        console.log(data.results[0]);
        currMovies.forEach(function(movie) {
          if (movie.title === title) {
            movie.release_date = data.results[0].release_date;
            movie.overview = data.results[0].overview;
            movie.vote_average = data.results[0].vote_average;
          }
        })
        this.setState({
          movies: currMovies
        })
      }.bind(this),
      error: function() {
        console.log('unsuccessful GET')
      }
    })
    
  }

  onAdd(event) {
    this.setState({
      movieToAdd: event.target.value
    })
  }
  
  handleWatched() {
    this.setState({
      movies: this.state.watchedMovies
    }) 
  }
  
  handleToWatch() {
    this.setState({
      movies: this.state.toWatchMovies
    }) 
  }
  
  handleAdd() {
    this.state.movies.push({title: this.state.movieToAdd, watched: false})
    this.setState({
      movies: this.state.movies
    })
  }
  
  onSearch(event) {
    this.setState({
      query: event.target.value
    })
  }
  
  watchedCheck(event) {
    this.state.movies.forEach(function(movie) {
      if (movie.title === event.target.id) {
        if (movie.watched === false) {
          movie.watched = true;
        } else {
          movie.watched = false;
        }
      }
    });
    var toWatchMovies = this.state.movies.filter(function(movie) {
      return movie.watched === false
    });
    this.setState({
      toWatchMovies: toWatchMovies
    })
    var watchedMovies = this.state.movies.filter(function(movie) {
      return movie.watched === true
    });
    this.setState({
      watchedMovies: watchedMovies
    })
  }
  
  handleSearch() {
    var query = this.state.query;
    var searchedMovies = this.state.movies.filter(function(movie) {
      return movie.title.toUpperCase().includes(query.toUpperCase());
    });
    this.setState({
      movies: searchedMovies
    })
  }
  render() {
    if (this.state.movies.length > 0) {
      return (
        <div>
          <h1>movieList</h1>
          <AddMovie handleAdd={this.handleAdd} onAdd={this.onAdd}/>
          <Search onSearch={this.onSearch} handleSearch={this.handleSearch}/>
          <Watched handleToWatch={this.handleToWatch} handleWatched={this.handleWatched}/>
          <MovieList onTitleClick={this.onTitleClick} watchedCheck={this.watchedCheck} movies={this.state.movies}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>movieList</h1>
          <AddMovie handleAdd={this.handleAdd} onAdd={this.onAdd}/>
          <Search onSearch={this.onSearch} handleSearch={this.handleSearch}/>
          <Watched handleToWatch={this.handleToWatch} handleWatched={this.handleWatched}/>
          <div>no movie by that name found</div>
          <MovieList onTitleClick={this.onTitleClick} watchedCheck={this.watchedCheck} movies={this.state.movies}/>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));