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

  it('should get undefined when retrieving non existing cookie', () => {
    const nonExisting = Cookies.get('yolo');

    expect(nonExisting, 'to be undefined');
  });

});
