import React, { useEffect } from "react"
import withRouter from "./with-router"

const parseJwt = (token: string): any => {
    try{
        return JSON.parse(atob(token.split(".")[0]))
    } catch (e){
        return null
    }
}

const AuthVerify = (props: any): any => {
    let location = props.router.location()

    useEffect(() => {
        const userString = localStorage.getItem('user')
        if(userString) {
            const user = JSON.parse(userString)
            const decodedJtw = parseJwt(user.token)
            if(decodedJtw.exp * 1000 < Date.now()){
                props.logOut()
            }
        }
    }, [location])
    return <></>
}

export default withRouter(AuthVerify)