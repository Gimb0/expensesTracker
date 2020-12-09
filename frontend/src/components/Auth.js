import axios from 'axios'

const BACKEND = 'http://localhost:8000'
const REFRESH_URL = '/api/token/refresh/'
const OBTAIN_URL = '/api/token/obtain/'

export default class Auth {

	obtainAuthToken = async (username, password) => {
		try {
			var res = await axios.post(BACKEND+OBTAIN_URL, {'username': username, 'password': password})
			if(res.status === 200) {
				// Move to expenses page
				localStorage.setItem('JWT-Access', res.data.access)
				localStorage.setItem('JWT-Refresh', res.data.refresh)
				return true
			} else if(res.status === 401) {
				return false
			} else {
				console.log(res)
			}
		} catch(err) {
			console.log(err)
			return false
		}
	}

	refreshAccessToken = async (username, password) => {
		try {
			var res = await axios.post(BACKEND+REFRESH_URL, {'refresh': localStorage.getItem('JWT-Refresh')})
			if(res.status === 200) {
				localStorage.setItem('JWT-Access', res.data.access)
				return true
			} else if (res.status === 401) {
				console.log(res)
				return false
			}
		} catch(err) {
			console.log(err)
		}
	}

	isLoggedIn = () => {
		if(localStorage.getItem('JWT-Refresh') !== null)
			return true

		return false
	}
}