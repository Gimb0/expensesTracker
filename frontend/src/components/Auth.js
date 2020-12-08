import axios from 'axios'

const REFRESH_URL = '/token/refresh/'
const OBTAIN_URL = '/token/obtain/'

export default class Auth {

    obtainAuthToken = (username, password) => {
        axios.post(REFRESH_URL, (username, password))
        .then(res => {
            if(res.status === 200) {
                // Move to expenses page
                localStorage.setItem('JWT-Access', res.body.access)
                localStorage.setItem('JWT-Refresh', res.body.refresh)
                return true
            } else if(res.status === 401) {
                console.log(res)
                return false
            }
        })
    }

    refreshAccessToken = (username, password) => {
        axios.post(OBTAIN_URL, localStorage.getItem('JWT-Refresh'))
        .then(res => {
            if(res.status === 200) {
                localStorage.setItem('JWT-Access', res.body.access)
                return true
            } else if (res.status === 401) {
                console.log(res)
                return false
            }
        })
    }
}