import React from 'react';

class DataService {
    Register(data: any): Promise<any> {
        return Promise.resolve(data);
    }

    Login(data: any): Promise<any> {
        return Promise.resolve(data);
    }

    VerifyOtp(data: any): Promise<any> {
        return Promise.resolve(data);
    }
}

export default new DataService();