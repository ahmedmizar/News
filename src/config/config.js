// const ENDPOINT = "https://jsonplaceholder.typicode.com/";
const ENDPOINT = "http://zad-quran.lodex-solutions.com/api/v1/";
 export const baseUrl = "http://zad-quran.lodex-solutions.com"
const TIMEOUT = 120000;

export default class ConfigClass {

    static get getEndpoint() {
        return ENDPOINT;
    }

    static get getTimeout() {
        return TIMEOUT;
    }


}