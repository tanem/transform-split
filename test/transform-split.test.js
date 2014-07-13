var expect = require('expect.js');
var stream = require('stream');
var TransformSplit = require('../lib/transform-split');

describe('Transform split', function(){

  var split;

  beforeEach(function(){
    split = TransformSplit();
  });

  it('should have "\\n" as the default delimiter', function(){
    expect(split._delimiter).to.be('\n');
  });

  it('should allow setting of a delimiter', function(){
    split = TransformSplit('foo');
    expect(split._delimiter).to.be('foo');
  });

  it('should split a stream based on the delimiter', function(done){
    var source = stream.PassThrough();
    source.pipe(split);
    
    source.write(new Buffer('Bibendum'));
    source.write(new Buffer(' Vestibulum'));
    source.end(new Buffer('\nPurus'));

    split
      .on('data', function(chunk){
        expect(chunk.toString()).to.be('Bibendum Vestibulum');
      })
      .on('end', done);
  });

});