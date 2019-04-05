import React, { Component } from "react";
import { Row, Col, Button, CardColumns, Card } from "react-bootstrap";
import "../css/list.css";
import Header from "./Header.js";
import { connect } from "react-redux";
import ViewMovies from "./ViewMovie";

class searchList extends Component {
  state = {
    movies: []
  };

  componentWillReceiveProps(props) {
      console.log("LALALAL",this.props)
    const { search } = props;
    this.setState({ movies: search });
  }

  render() {
    const { movies } = this.state;
    console.log("YEH WORKING",this.props)
    return (
      <div>
        <Header navigateToSearch={() => this.props.history.push("/search")} />
        <ViewMovies {...this.props} movies={movies} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.movies.search,
    add_List: state.movies.addList
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(searchList);
