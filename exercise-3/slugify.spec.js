//
const should = require('chai').should();
const {
  slugifyEmail
} = require('./slugify');

//
describe('Slugify email', function () {

  it('should slugify email', function () {
    const email = `"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com`;
    const result = slugifyEmail(email);

    result.should.equal('very-dot--dot-very-dot-very-at-very-dot-unusual-at-strange-dot-example-dot-com');
  });

});