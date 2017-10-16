export const searchCity = text => {
    return {
        type: 'SEARCH_CITY',
        text
    }
}

export const searchCitySuccess = result => {
    return {
        type: 'SEARCH_CITY_SUCCESS',
        result
    }
}

export const searchCityFailure = () => {
    return {
        type: 'SEARCH_CITY_FAILURE'
    }
}