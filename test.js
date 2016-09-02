var Cookies = require('js-cookie');
var jsdomify = require('jsdomify').default;
var expect = require('unexpected');

describe('JsCookie Integration', function() {
  before(function() {
    jsdomify.create();
  });

  it('should create and retrieve cookies', function() {
    Cookies.set('c', '1337');
    var value = Cookies.get('c');

    expect(value, 'to be', '1337');
  });

  it('should get undefined when retrieving non existing cookie', function() {
    var nonExisting = Cookies.get('yolo');

    expect(nonExisting, 'to be undefined');
  });

});
