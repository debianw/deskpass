//
const should = require('chai').should();
const {
  stripQuotes
} = require('./strip-quotes');

//
describe('Slugify email', function () {

  it('should strip quotes from a string', function () {
    const str = `sdf'sdfsdf'sdf\"s sdf sdf 'sdf '' dfsdf'`;
    const result = stripQuotes(str);

    result.should.equal("sdfsdfsdfsdfs sdf sdf sdf  dfsdf");
  });

});