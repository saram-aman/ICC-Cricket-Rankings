import DataService from "./service";

class AuthServices {
    Login(data: any) {
        return DataService.Login(data)
            .then((response: any) => {
                if (response.data.statusCode === 200) {
                    localStorage.setItem('user', JSON.stringify(response.data.data));
                }
                return response;
            });
    }

    LogOut(){
        localStorage.removeItem('user')
    }

    Register(data: any){
        return DataService.Register(data)
    }

    GetCurrentUser(){
        const userString = localStorage.getItem('user')
        if (userString) {
            return JSON.parse(userString)
        }
    }

    VerifyOtp(data: any){
        return DataService.VerifyOtp(data)
            .then((response: any) => {
                if(response.data[0]?.token){
                    localStorage.setItem('user', JSON.stringify(response.data))
                }
                return response.data
            })
    }
}

export default new AuthServices();