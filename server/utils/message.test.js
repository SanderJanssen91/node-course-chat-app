var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'test1';
    var text = 'test2'
    res = generateMessage(from, text);

    expect(res).toInclude({from, text});
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'test1';
    var lat = '5.8198085'
    var lng = '51.8308201'
    var url = 'https://www.google.nl/maps/search/51.8308201+5.8198085'
    res = generateLocationMessage(from, lng, lat);

    expect(res).toInclude({from, url});
    expect(res.createdAt).toBeA('number');
  });
});
