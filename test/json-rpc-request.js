var assert = require('assert');
var JsonRpcRequest = require('..');

var id = 1;
var method = 'someMethod';
var params = 'some params';


describe('JSON RPC 2.0 request', function() {
  it('should create request using the `new` keyword', function() {
    var req = new JsonRpcRequest(id, method, params);
    assert(req.id === id);
    assert(req.method === method);
    assert(req.params === params);
  });

  it('should create request without using the `new` keyword', function() {
    var req = JsonRpcRequest(id, method, params);
    assert(req.id === id);
    assert(req.method === method);
    assert(req.params === params);
  });

  it('should create request with correct version', function() {
    var req = new JsonRpcRequest(id, method, params);
    assert(req.jsonrpc === '2.0');
  });

  it('should not include params property if params argument is omitted', function() {
    var req = new JsonRpcRequest(id, method);
    assert(typeof req.params === 'undefined');
  });

  it('should throw if not passing a string or a number as id', function() {
    var requestError;

    try {
      new JsonRpcRequest(true, method, params);
    } catch (err) {
      requestError = err;
    }

    assert(requestError);
  });

  it('should throw if not passing a method', function() {
    var requestError;

    try {
      new JsonRpcRequest(id);
    } catch (err) {
      requestError = err;
    }

    assert(requestError);
  });
});
