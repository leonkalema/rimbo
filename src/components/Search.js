import React, { Component } from "react";
import { Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { searchData } from "../actions/movieActions";
import { Nav } from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    };
  }

  onInputChange = searchValue => {
    // ev.preventDefault();
    // ev.stopPropagation();
    this.setState({ searchValue });
  };

  SearchMovieList = () => {
    this.props.searchData(this.state.searchValue);
    this.props.navigateToSearch();
  }

  render() {
    return (
      <Form inline>
        <FormControl
          type="text"
          placeholder="TV Search ..."
          className="mr-sm-2"
          value={this.state.searchValue}
          onChange={event => this.onInputChange(event.target.value)}
          href="javascript:void(0)"
        />
        <Nav.Link onClick={() => this.SearchMovieList()}>Search</Nav.Link>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchData: val => dispatch(searchData(val))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
