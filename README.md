# Locale

Utilities for working with LC environment variables

## Install

```
npm install cli-locale
```

## API

```
var lc = require('cli-locale')('en_us');
var lang = lc.find(['LC_ALL', 'LC_MESSAGES']);
```

### find(search)

Find the value of an LC environment variable and return a sanitized represention of the locale. If no variable value is found in the search array then this method returns the first available LC variable. If the no LC variables are available in the environment this method returns the default `language`.

* `search`: Array of LC environment variables to prefer.

Return a language identifier.

## language

A language identifier to use when no value could be extracted via the environment, default value is `en`.

### sanitize(lang)

Sanitize the value of an LC variable removing any character encoding portion, such that `en_GB.UTF-8` becomes `en_gb`.

* `lang`: A language identifier extracted from an LC environment variable.

Returns a sanitized language identifier.

## License

Everything is [MIT](http://en.wikipedia.org/wiki/MIT_License). Read the [license](/LICENSE) if you feel inclined.
