import React, { Component } from "react";
import "../css/list.css";
import { getMovies } from "../actions";
import ViewMovies from "./ViewMovie";

import { connect } from "react-redux";

class MovieList extends Component {
  state = {
    movies: [],
    searchInfo: {},
    page: 1,
    onBOttom: false
  };
  componentDidMount() {
    this.props.getMovies(this.state.page);
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.setState({
        onBOttom: true
      });
    } else {
      this.setState({
        onBOttom: false
      });
    }
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.movies) {
      this.setState({
        movies: [...this.state.movies, ...newProps.movies],
        page: this.state.page + 1,
        onBOttom: false
      });
    }
  }

  componentDidUpdate() {
    if (this.state.onBOttom) {
      this.props.getMovies(this.state.page);
    }
  }

  render() {
    const { movies } = this.state;
    if (this.props.movies.length === 0) {
      return <h1>Loading...</h1>;
    }

    return <ViewMovies movies={movies} />;
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    page: null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovies: page => dispatch(getMovies(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
