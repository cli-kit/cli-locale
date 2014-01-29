var language = 'en';

/**
 *  Sanitize the value of an LC variable removing any character
 *  encoding portion, such that en_GB.UTF-8 becomes en_gb.
 *
 *  @param lang A language identifier extracted from an LC variable.
 *  @param filter A filter function.
 *
 *  @return A sanitized language identifier.
 */
function sanitize(lang, filter) {
  if(!(typeof lang == 'string')) return lang;
  lang = lang.replace(/\..*$/, '').toLowerCase();
  if(typeof filter == 'function') {
    lang = filter(lang);
  }
  return lang;
}

/**
 *  Find the value of an LC environment variable and return a
 *  sanitized represention of the locale.
 *
 *  If no variable value is found in the search array then this
 *  method returns the first available LC variable.
 *
 *  @param search An array of LC variables to prefer.
 *  @param filter A filter function.
 *
 *  @return A language identifier.
 */
function find(search, filter) {
  var lang = language, search = search || [], i, k, v, re = /^LC_/;
  for(i = 0;i < search.length;i++) {
    lang = sanitize(process.env[process.env[search[i]]] || '', filter);
    if(lang) return lang;
  }
  // nothing found in search array, find first available
  for(k in process.env) {
    v = process.env[k];
    if(re.test(k) && v) {
      lang = sanitize(v, filter);
    }
  }
  return lang;
}

module.exports = function(lang) {
  module.exports.language = language = lang;
  return module.exports;
}

module.exports.sanitize = sanitize;
module.exports.find = find;
module.exports.language = language;
