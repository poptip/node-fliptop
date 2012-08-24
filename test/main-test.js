var API_KEY = 'whatever';
var fliptop = require('..')(API_KEY);
var assert  = require('assert');
var nock    = require('nock');

var HOST = 'http://api.fliptop.com';
var services = {
  email: {
    path: '/beta/person?email=jon@gmail.com&api_key=' + API_KEY,
    handle: 'jon@gmail.com',
    data: {
      "image_url": "http://www.linkedin.com/mpr/pub/image-pUoUCCiPFxLMOog7fmXlIn1iA-YfkVoApZXAcExkADQ0vsIwpUoAGN2PAav_vIOw1gQe/jeannie-o-toole.jpg",
      "name": "Jon Campling",
      "first_name": "jon",
      "last_name": "campling",
      "age": "",
      "gender": "",
      "location": "Detroit",
      "company": "Droga5",
      "title": "",
      "email": "jon@gmail.com",
      "memberships": {
        "hi5": "http://hi5.com/friend/p108488645--JOHN_SMITH--html",
        "friendster": "http://profiles.friendster.com/24152495",
        "klout": "http://klout.com/jontwitter",
        "twitter": "http://twitter.com/jontwitter",
        "linkedin": "http://www.linkedin.com/pub/4/122/946",
        "vimeo": "http://vimeo.com/user6439875",
        "multiply": "http://jiggee.multiply.com",
        "myspace": "http://www.myspace.com/jiggeejon"
      }
    }
  },

  twitter: {
    path: '/beta/person?twitter=http://twitter.com/rebeccablack&api_key=' + API_KEY,
    handle: 'rebeccablack',
    data: {
      "image_url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc4/186842_581026427_5502213_q.jpg",
      "name": "Rebecca Black",
      "first_name": "rebecca",
      "last_name": "black",
      "age": "",
      "gender": "Female",
      "location": "Davis, California, United States",
      "company": "",
      "title": "",
      "email": "",
      "memberships": {
        "klout": "http://klout.com/rebeccablack",
        "twitter": "http://twitter.com/rebeccablack",
        "picasa": "http://picasaweb.google.com/RebeccaBlack1",
        "youtube": "http://youtube.com/user/RebeccaBlack1",
        "myspace": "http://www.myspace.com/etiquettelady",
        "facebook": "http://facebook.com/thepoliteone",
        "flickr": "http://www.flickr.com/people/28286354@N03"
      }
    }
  },

  facebook: {
    path: '/beta/person?facebook=http://facebook.com/thezuck&api_key=' + API_KEY,
    handle: 'thezuck',
    data:  {
      "image_url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc4/49942_4_1525300_n.jpg",
      "name": "Mark Zuckerberg",
      "first_name": "mark",
      "last_name": "zuckerberg",
      "age": "",
      "gender": "Male",
      "location": "",
      "company": "",
      "title": "",
      "email": "",
      "memberships": {
        "lanyrd": "http://lanyrd.com/people/finkd/",
        "twitter": "http://twitter.com/finkd",
        "vimeo": "http://vimeo.com/user3352914",
        "myspace": "http://www.myspace.com/112674925",
        "plancast": "http://plancast.com/zuck",
        "facebook": "http://www.facebook.com/zuck"
      }
    }
}
};

for (var key in services) {
  if (services.hasOwnProperty(key)) {
    testService(services[key], key);
  }
}

function testService(service, key) {
  describe('fetch by ' + key, function() {
    it('returns correct data about the user', function(done) {
      nock(HOST)
        .get(service.path)
        .reply(200, service.data)
        ;

      fliptop[key](service.handle, function(err, data) {
        if (err) return done(err);

        assert.deepEqual(data, service.data);
        done();
      });
    });
  });
}
