import React, { Component } from 'react';
import Home from './components/Home.js'
import MovieDetail from './components/MovieDetail.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import FavoriteList from './components/FavoriteList'
import searchList from './components/SearchList'
import AddList from './components/AddList'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie" component={MovieDetail} />
        <Route exact path="/favorites" component={FavoriteList} />
        <Route exact path="/search" component={searchList} />
        <Route exact path="/add" component={AddList} />
      </Router>
    );
  }
}

export default App;
