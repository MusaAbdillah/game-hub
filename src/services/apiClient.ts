import axios, {CanceledError} from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "54d00d4e36ee4362b81836ed84d252a3"
    }
})

export {CanceledError};
