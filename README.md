# Locale

Utilities for working with LC environment variables

## API

### sanitize(lang)

Sanitize the value of an LC variable removing any character encoding portion, such that en_GB.UTF-8 becomes en_gb.

* `lang`: A language identifier extracted from an LC environment variable.

Returns a sanitized language identifier.

### find(search)

Find the value of an LC environment variable and return a sanitized represention of the locale. If no variable value is found in the search array then this method returns the first available LC variable.

* `search`: Array of LC environment variables to prefer.

Return a language identifier.

## License

Everything is [MIT](http://en.wikipedia.org/wiki/MIT_License). Read the [license](/LICENSE) if you feel inclined.
