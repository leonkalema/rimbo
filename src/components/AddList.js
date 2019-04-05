import React, { Component } from "react";
import "../css/list.css";
import { fetchAddList } from "../actions/movieActions";
import Header from "./Header.js";
import { connect } from "react-redux";
import ViewMovies from "./ViewMovie";

class AddList extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.props.fetchAddList();
  }

  componentWillReceiveProps(props) {
    const { add_List } = props;
    this.setState({ movies: add_List });
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
    add_List: state.movies.addList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAddList: id => dispatch(fetchAddList(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddList);
