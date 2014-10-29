# transform-split

[![Build Status](https://travis-ci.org/tanem/transform-split.png?branch=master)](https://travis-ci.org/tanem/transform-split)
[![Coverage Status](https://coveralls.io/repos/tanem/transform-split/badge.png)](https://coveralls.io/r/tanem/transform-split)
[![NPM version](https://badge.fury.io/js/transform-split.svg)](http://badge.fury.io/js/transform-split)

A transform stream that splits an incoming stream based on a delimiter.


## Installation

```
$ npm install transform-split --save
```


## Example

```js
var stream = require('stream');
var split = require('transform-split');
var source = stream.PassThrough();
var dest = stream.PassThrough();

source.pipe(split()).pipe(dest);
    
source.write(new Buffer('Bibendum'));
source.write(new Buffer(' Vestibulum'));
source.end(new Buffer('\nPurus'));

dest.on('data', function(chunk){
  // => Bibendum Vestibulum
  console.log(chunk.toString());
});
```


## API

### var split = transformSplit(delimiter)

Initialise a new `TransformSplit` with the given `delimiter`.


## Testing

```
$ make test
```

To generate a coverage report:

```
$ make test-cov
```


## Credits

 * [urlgrey](https://github.com/cainus/urlgrey) for the Makefile inspiration.
