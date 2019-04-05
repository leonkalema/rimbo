import React, { Component } from "react";
import "../css/list.css";
import {
  fetchFavorite
} from "../actions/movieActions";
import Header from "./Header.js";
import { connect } from "react-redux";
import ViewMovies from "./ViewMovie";

class FavoriteList extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.props.fetchFavorite();
  }

  componentWillReceiveProps(props) {
    const { favorites } = props;
    this.setState({ movies: favorites });
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <Header navigateToSearch={() => this.props.history.push("/search")} />
        <ViewMovies movies={movies} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.movies.addFavorite
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFavorite: id => dispatch(fetchFavorite(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteList);
