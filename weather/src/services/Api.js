import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5', appid = '5ef8fe19d802fa96818927dc55cd4d33') => {

    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL,
        // here are some default headers
        headers: {
            'Cache-Control': 'no-cache',
            'X-Requested-With': 'http://localhost:3000'
        },
        // 10 second timeout...
        timeout: 10000
    })

    return {
        /**
         * Search Weather
         */
        searchCity: (text) => api.get('/weather', { q: text, appid: appid })
    }
}

// let's return back our create method as the default.
export default {
    create
}
