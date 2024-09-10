import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: 'https://assets-icc.sportz.io/cricket/v1/ranking?client_id=tPZJbRgIub3Vua93%2FDWtyQ%3D%3D&comp_type=test&feed_format=json&lang=en&type=team',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    }
});

export default instance;