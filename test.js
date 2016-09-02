const Cookies = require('js-cookie');
import jsdomify from 'jsdomify';
import expect from 'unexpected';

describe('JsCookie Integration', () => {
  before(() => {
    jsdomify.create();
  });

  it('should create and retrieve cookies', () => {
    Cookies.set('c', '1337');
    const value = Cookies.get('c');
    expect(value, 'to be', '1337')
  });

});