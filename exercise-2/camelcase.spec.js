//
const should = require('chai').should();
const {
  addSpaceToCamelCase
} = require('./camelcase');

//
describe('CamelCase', function () {

  it('should add space to camelCase string', function () {
    const str = "aStringLikeThis";
    const result = addSpaceToCamelCase(str);

    result.should.equal("A String Like This");
  });

});