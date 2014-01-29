var expect = require('chai').expect;
var spanish = 'es';
var lc = require('../..'), find = lc.find;
lc(spanish);
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
function restore() {
  for(var z in vars) {
    process.env[z] = vars[z];
  }
}

describe('cli-locale:', function() {
  it('should return correct default language', function(done) {
    var lang = lc.language;
    expect(lang).to.be.a('string').that.equals(spanish);
    done();
  });
  //it('should return lowercase lang', function(done) {
    //var language = enus, lang;
    //lang = sanitize(language);
    //expect(lang).to.be.a('string').that.equals('en_us');
    //done();
  //});
  //it('should return lang without character encoding', function(done) {
    //var language = engb, lang;
    //lang = sanitize(language);
    //expect(lang).to.be.a('string').that.equals('en_gb');
    //done();
  //});
  //it('should return lang with hyphens', function(done) {
    //var language = engb, lang;
    //lang = sanitize(language, function(lang) {
      //return lang.replace(/_/g, '-');
    //});
    //expect(lang).to.be.a('string').that.equals('en-gb');
    //done();
  //});
})
