import React, { Component } from 'react';
import Header from './Header.js'
import MovieList from './MovieList'

class Home extends Component {


  render() {

    return (
      <div>
        <Header navigateToSearch={() => this.props.history.push('/search')} />

        <MovieList />
      </div>
    );
  }
}

export default Home;