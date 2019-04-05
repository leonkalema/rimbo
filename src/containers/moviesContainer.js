import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../actions/index.js'


class MoviesContainer extends Component {
    
    componentDidMount() {
        this.props.getMovies()
    }

    render() {
        if (this.props.movies.length === 0) {
            return <h1>Loading...</h1>
        }
                
            return (
            <div>
                <h1>Grocery List</h1>
                
                    {this.props.movies.map(movie => (
                        <div key={movie.id}>
                            <ul>
                                <li>{movie.name}</li>
                <li>Mazzi Gambwa </li>
                            </ul>
                        </div>
                    ))} 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.results.movies
    }
}

export default connect(mapStateToProps, { getMovies })(MoviesContainer)