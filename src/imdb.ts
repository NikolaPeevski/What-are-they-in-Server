import Promise from 'bluebird';
import Constants from './constants';
import {rejects} from "assert";

class imdbModule {

    constructor(){}

    // public getInfo(name: String) : Promise<any> {
    //     return new Promise<any>((resolve, reject) => {
    //         this.search(name).then(result => {
    //         if ()
    //         });
    //     });
    // }
    //
    // public search(name: String): Promise<any> {
    //     return new Promise<any>( (resolve, reject) => {
    //         let options = {
    //
    //         }
    //         resolve({})
    //     });
    // }


}
// async function search(name) {
//     var options = {
//         method: 'GET',
//         url: `${BASE_URL}/search/person?query=${name}&page=1&api_key=${API_KEY}`,
//         json: true
//     };
//
//     try {
//         return await rp(options);
//     } catch(err) {
//         console.error(err);
//         return null;
//     }
// }
//
// async function getInfo(name) {
//     let info = {};
//
//     let res = await search(name);
//     if(!res || !res.results.length) return null;
//
//     // console.info(res);
//     info = res.results[0];
//     if(!info) return null;
//
//     res = await getDetails(info.id);
//     if(!res) return null;
//
//     return {...info, ...res};
// }

