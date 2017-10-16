const search = (state = {fetching: false, text: '', result: null}, action) => {
    switch (action.type) {
        case 'SEARCH_CITY':
            return { ...state, text: action.text, fetching: true }
        case 'SEARCH_CITY_SUCCESS':
            return { ...state, result: action.result, fetching: false }
        case 'SEARCH_CITY_FAILURE':
            return { ...state, fetching: false }
        default:
            return state
    }
}

export default search