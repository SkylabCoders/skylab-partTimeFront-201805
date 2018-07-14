import firebase from 'firebase';
import axios from 'axios';

export default class ApiService {
    static getBeers(pagina){
        return new Promise((resolve, reject) => {
            axios.get(`https://api.punkapi.com/v2/beers`,{
                params:{
                    page: pagina
                }
            }).then(res => {
                if(res.status === 200){
                    resolve(res.data);
                }
            })
            .catch(function (error) {
                // handle error
                reject(error);
            })
        });
    }
}