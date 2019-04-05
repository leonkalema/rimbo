import React, { Component } from "react";
import { Row, Col, Button, CardColumns, Card } from "react-bootstrap";
import "../css/list.css";
import { getMovies } from "../actions";
import {
  addFavorites,
  removeFavorites,
  addList,
  removeList,
  fetchAddList,
  fetchFavorite
} from "../actions/movieActions";
import { connect } from "react-redux";

class ViewMovie extends Component {
  state = {
    movies: []
  };
  componentDidMount(){
    this.props.fetchFavorite();
    this.props.fetchAddList();

  }
  setItem = movie => {
    console.log("WORKINGGGGG",movie)
    if ((movie && movie.name) || (movie && movie.title)) {
      this.props.addFavorites(movie);
    } else {
      this.props.removeFavorites(movie);
    }
  };

  add = (movie) => {
    if ((movie && movie.name) || (movie && movie.title)) {
      this.props.addList(movie);
      // this.props.fetchAddList();
      // this.forceUpdate();
    } else {
      this.props.removeList(movie);
      // this.props.fetchAddList();
      // this.forceUpdate();
    }
  }

  render() {
    const { favourites, add_List, movies } = this.props;
    return (
      <div>
        <CardColumns id="card-columns">
          {movies && !!movies.length ? (
            movies.map((movie, index) => {
              const isFavor =
              favourites && !!favourites.length
                  ? favourites.find(arr => arr.id === movie.id)
                  : false;
              const isLike =
                add_List && !!add_List.length
                  ? add_List.find(arr => arr.id === movie.id)
                  : false;

              return (
                <Card key={movie.id}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w185${
                      movie.backdrop_path
                    }`}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h4>{movie.name || movie.title}</h4>
                      <h6>{movie.vote_average || "No Rating"} </h6>
                    </Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Row>
                      <Col sm>
                        <Button
                          onClick={() =>
                            this.setItem(!isFavor ? movie : movie.id)
                          }
                          variant="danger"
                        >
                          <span
                            className={
                              isFavor
                                ? "glyphicon glyphicon-heart-empty"
                                : "glyphicon glyphicon-heart"
                            }
                          />
                        </Button>
                      </Col>
                      <Col sm />
                      <Col sm align="right">
                        <Button
                          onClick={() => this.add(!isLike ? movie : movie.id)}
                          variant="danger"
                        >
                          <span
                            className={
                              isLike
                                ? "glyphicon glyphicon-minus"
                                : "glyphicon glyphicon-plus"
                            }
                          />
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              );
            })
          ) : (
            <div>Not Found</div>
          )}
        </CardColumns>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    add_List: state.movies.addList,
    favourites: state.movies.addFavorite
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAddList: id => dispatch(fetchAddList(id)),
    fetchFavorite: id => dispatch(fetchFavorite(id)),
    addFavorites: id => dispatch(addFavorites(id)),
    removeFavorites: id => dispatch(removeFavorites(id)),
    addList: id => dispatch(addList(id)),
    removeList: id => dispatch(removeList(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewMovie);
