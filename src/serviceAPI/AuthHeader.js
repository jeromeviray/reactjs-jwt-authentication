export default function AuthHeader() {
    const user = JSON.parse(localStorage.getItem("userToken"));

    if (user && user.accessToken) {
        return { Authorization: "Bearer " + user.jwtToken }
    } else {
        return {}
    }

}