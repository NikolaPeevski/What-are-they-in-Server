const rp = require('request-promise-native');

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a50883fe81dcc1a07cb471896d5f2fc3';

async function getInfo(name) {
  let info = {}

  let res = await search(name);
  if(!res || !res.results.length) return null;

  // console.info(res);
  info = res.results[0];
  if(!info) return null;
  
  res = await getDetails(info.id);
  if(!res) return null;

  return {...info, ...res};
}

async function getDetails(id) {
  var options = {
    method: 'GET',
    url: `${BASE_URL}/person/${id}?api_key=${API_KEY}`,
    json: true
  };

  try {
    return await rp(options);
  } catch(err) {
    console.error(err);
    return null;
  }
}

async function search(name) {
  var options = {
    method: 'GET',
    url: `${BASE_URL}/search/person?query=${name}&page=1&api_key=${API_KEY}`,
    json: true
  };

  try {
    return await rp(options);
  } catch(err) {
    console.error(err);
    return null;
  }
}

exports.getInfo = getInfo;

/*
(async function() {
  // console.log(await search('bradley cooper'));
  // console.log(await getDetails(51329));
  // const fs = require('fs');
  // fs.writeFileSync('./src/Jennifer_Aniston.json', JSON.stringify(await getInfo('Jennifer Aniston')));
})()
//*/
