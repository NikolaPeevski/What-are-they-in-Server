const expect = require('chai').expect;
const getInfo = require('./imdb').getInfo;

describe('getInfo()', function() {
  let tests = [
    { name: 'George Lucas', id: 1 },
    { name: 'Mark Hamill', id: 2 },
    { name: 'Harrison Ford', id: 3 },
    { name: 'Carrie Fisher', id: 4 },
    { name: 'Peter Cushing', id: 5 },
    { name: 'Anthony Daniels', id: 6 },
    { name: 'Andrew Stanton', id: 7 },
    { name: 'Lee Unkrich', id: 8 },
    { name: 'Graham Walters', id: 9 },
    { name: 'Bob Peterson', id: 10 },
  ];

  for(let i = 0; i < tests.length; i++) {
    it(`Should get correct response for ${tests[i].name}`, async function() {
      let res = await getInfo(tests[i].name);

      expect(res).to.have.own.property('id');
      expect(res.id).to.equal(tests[i].id);
      expect(res).to.have.own.property('popularity');
      expect(res).to.have.own.property('name');
      expect(res).to.have.own.property('known_for');
      expect(res).to.have.nested.property('known_for[0]');
      expect(res).to.have.nested.property('known_for[0].id');
      expect(res).to.have.nested.property('known_for[0].media_type');
      expect(res).to.have.nested.property('known_for[0].title');
      expect(res).to.have.nested.property('known_for[0].overview');
      expect(res).to.have.nested.property('known_for[0].release_date');
    });
  }
});
