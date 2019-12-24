const expect = require('chai').expect;
const yeet = require('.');

describe('yeet', function() {
  it('should throw an exception with the given parameter', function() {
    const THIS_BITCH = 'stacy';
    expect(() => yeet(new Error(THIS_BITCH))).to.throw(Error, THIS_BITCH);
  });
});
