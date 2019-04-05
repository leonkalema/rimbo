const initialState = {
    movies: [],
    movie: {},
    search: [],
    addFavorite: [],
    addList:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES_SUCCESS':
            return { ...state, movies: action.payload }

        case 'FETCH_MOVIE_SUCCESS':
            return { ...state, movie: action.payload }
        case 'SEARCH':
            return { ...state, search: action.payload }
        case 'ADD_FAVORITES':
            return { ...state, addFavorite: action.payload }
        case 'ADD_LIST':
            return { ...state, addList: action.payload }

        default:
            return state
    }
}