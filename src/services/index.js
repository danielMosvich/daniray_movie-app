import config from "./config";

const searchByText = async (text)=> {
    try{
        const response = await fetch(`${config.api_url}?s=${text}&apikey=${config.api_key}`);
        const data = await response.json();
        return data;

    } catch(error){
        return error;
    }
}
const services = {
    searchByText,
}

export default services;
