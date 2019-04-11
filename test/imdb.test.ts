import { expect } from 'chai';
import { getInfo } from '../src/imdb';

describe('getInfo()', function() {
  let tests = [
    { name: 'Jennifer Aniston', id: 4491 },
    { name: 'Courteney Cox', id: 14405 },
    { name: 'Lisa Kudrow', id: 14406 },
    { name: 'Matt LeBlanc', id: 14407 },
    { name: 'Matthew Perry', id: 14408 },
    { name: 'David Schwimmer', id: 14409 },
  ];

  it('Should return null for invalid person', async function() {
    let res = await getInfo();

    expect(res).to.be.null;
  });

  for(let i = 0; i < tests.length; i++) {
    it(`Should get correct response for ${tests[i].name}`, async function() {
      let res = await getInfo(tests[i].name);

      expect(res).to.have.ownPropertyDescriptor('id');
      expect(res.id).to.equal(tests[i].id);
      expect(res).to.have.ownPropertyDescriptor('popularity');
      expect(res).to.have.ownPropertyDescriptor('profile_path');
      expect(res).to.have.ownPropertyDescriptor('name');
      expect(res).to.have.ownPropertyDescriptor('known_for');
      expect(res).to.have.nested.property('known_for[0]');
      expect(res).to.have.nested.property('known_for[0].id');
      expect(res).to.have.nested.property('known_for[0].media_type');
      expect(res).to.have.nested.property('known_for[0].title');
      expect(res).to.have.nested.property('known_for[0].poster_path');
      expect(res).to.have.nested.property('known_for[0].overview');
      expect(res).to.have.nested.property('known_for[0].release_date');
    });
  }
});