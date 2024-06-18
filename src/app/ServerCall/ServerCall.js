import axios from "axios";
export class ServerCall{
    static sendGetReq(url){
        return axios.get(url)
    }
}