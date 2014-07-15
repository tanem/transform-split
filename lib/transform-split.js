var stream = require('stream');

module.exports = function(delimiter){
  return new TransformSplit(delimiter);
};

function TransformSplit(delimiter){
  stream.Transform.call(this);
  this._buffer = '';
  this._delimiter = delimiter || '\n';
}

TransformSplit.prototype = Object.create(stream.Transform.prototype);

TransformSplit.prototype._transform = function(chunk, encoding, done){
  var str = chunk.toString();
  var delimiterIndex = str.indexOf(this._delimiter);
  if (~delimiterIndex) {
    this._buffer += str.slice(0, delimiterIndex);
    this.push(this._buffer);
    this._buffer = str.slice(delimiterIndex + this._delimiter.length);
  } else {
    this._buffer += str;
  }
  done();
};