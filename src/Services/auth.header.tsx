export default function AuthHeader(): any{
    const userString = localStorage.getItem('user')
    if (userString) {
        let user = JSON.parse(userString)

        if(user && user.token){
            return {'authorization': user.token, 'Content-Type': 'multipart/form-data'}
        } else {
            return {}
        }
    }
}