var expect = require('chai').expect;
var lc = require('../..'), find = lc.find;
var en = 'en';
var enus = 'en_US';
var engb = 'en_GB.UTF-8';

// stash any original LC variables
var vars = {};
function stash() {
  for(var z in process.env) {
    if(/^LC_/.test(z)) {
      vars[z] = process.env[z];
    }
  }
}
function clear() {
  for(var z in process.env) {
    if(/^LC_/.test(z)) {
      process.env[z] = '';
    }
  }
}
function restore() {
  for(var z in vars) {
    process.env[z] = vars[z];
  }
}


describe('cli-locale:', function() {
  stash();
  it('should return default language with no LC variables', function(done) {
    clear();
    lc(en);
    var lang = find(['LC_ALL', 'LC_MESSAGES']);
    expect(lang).to.be.a('string').that.equals(lc.language);
    //console.dir(lang);
    //console.dir(lc.language);
    done();
  });
})
