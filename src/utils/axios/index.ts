import axios from "axios";
import {useAppSelector} from "../hook";


export const instance = axios.create({
    baseURL: 'https://2n3pfcpw-7122.euw.devtunnels.ms',
    //baseURL: 'https://2n3pfcpw-7122.euw.devtunnels.ms/Auth',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});
export const useAuthInstance = () => {
    const user = useAppSelector(state =>state.auth.user)

    const api = axios.create({
        baseURL: 'https://2n3pfcpw-7122.euw.devtunnels.ms',
        timeout: 10000,
        headers: {
            Authorization: `Bearer ${user.userToken}`,
        },
    });

    return api;
}