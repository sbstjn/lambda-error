# AWS Lambda Error

[![Travis](https://img.shields.io/travis/sbstjn/lambda-error.svg?maxAge=600)](https://travis-ci.org/sbstjn/latenz) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/sbstjn/lambda-error/commits/master) [![npm](https://img.shields.io/npm/dt/lambda-error.svg?maxAge=600)](https://www.npmjs.com/package/lambda-error) [![npm](https://img.shields.io/npm/v/lambda-error.svg?maxAge=600)](https://www.npmjs.com/package/lambda-error) [![Codecov](https://img.shields.io/codecov/c/github/sbstjn/lambda-error.svg?maxAge=600)](https://codecov.io/gh/sbstjn/lambda-error)

If you plan to use Node.js in an AWS Lambda function with an AWS API Gateway and need to have streamlined error objects for easy response parsing, just use `lambda-error`:

```js
var lambdaErr = require('lambda-error');

exports.handle = function(e, ctx, callback) {
  if (!e.name) {
    return callback(
      lambdaErr.BadRequest('Missing name').toString()
    );
  }
  
  ctx.succeed({name: e.name, found: true});
};
```

```js
var lambdaErr = require('lambda-error');

exports.handle = function(e, ctx, callback) {
  if (!e.name) {
    return callback(
      lambdaErr.BadRequest('Missing name').withContext(ctx).toString()
    );
  }
  
  ctx.succeed({name: e.name, found: true});
};
```

### Available error codes

 - `BadRequest` (400)
 - `Forbidden` (403)
 - `NotFound` (404)
 - `Conflict` (409)
 - `InternalServerError` (500)


