var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const rp = require('request-promise-native');
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a50883fe81dcc1a07cb471896d5f2fc3';
function getInfo(name) {
    return __awaiter(this, void 0, void 0, function* () {
        let info = {};
        let res = yield search(name);
        if (!res || !res.results.length)
            return null;
        // console.info(res);
        info = res.results[0];
        if (!info)
            return null;
        res = yield getDetails(info.id);
        if (!res)
            return null;
        console.log(info);
        console.log(res);
        return Object.assign({}, info, res);
    });
}
function getDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var options = {
            method: 'GET',
            url: `${BASE_URL}/person/${id}?api_key=${API_KEY}`,
            json: true
        };
        try {
            return yield rp(options);
        }
        catch (err) {
            console.error(err);
            return null;
        }
    });
}
function search(name) {
    return __awaiter(this, void 0, void 0, function* () {
        var options = {
            method: 'GET',
            url: `${BASE_URL}/search/person?query=${name}&page=1&api_key=${API_KEY}`,
            json: true
        };
        try {
            return yield rp(options);
        }
        catch (err) {
            console.error(err);
            return null;
        }
    });
}
exports.getInfo = getInfo;
/*
(async function() {
  // console.log(await search('bradley cooper'));
  // console.log(await getDetails(51329));
  console.log(await getInfo('bradley cooper'));
})()
//*/
//# sourceMappingURL=imdb.js.map