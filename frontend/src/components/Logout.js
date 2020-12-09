export default function Logout() {
        localStorage.removeItem('JWT-Refresh')
        localStorage.removeItem('JWT-Access')

        window.location.href = "/login"
}