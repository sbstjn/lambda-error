(() => {
  'use strict';
	
	
	const fs = require('fs');
  const assert = require('chai').assert;
	const LambdaError = require(__dirname + '/../src/LambdaError.js');
	const fixturesStatusList = JSON.parse(fs.readFileSync(__dirname + '/fixtures/status.json'));

  suite('HTTPStatus', function() {
    test('Function for every HTTP status code', function() {
			for (var n in fixturesStatusList) {
				var message = 'Testing error ' + n;
				var error = LambdaError[n](message);
		
				assert.equal(error.get('name'), 		n);
				assert.equal(error.get('code'), 		fixturesStatusList[n]);
				assert.equal(error.get('message'), 	message);
			}
    });
		
    test('Function for every HTTP status code with context', function() {
			for (var n in fixturesStatusList) {
				var message = 'Testing error ' + n;
				var requestId = 12345;
				var error = LambdaError[n](message).withContext({
					awsRequestId: requestId
				});
				var jsons = error.toString();
		
				assert.equal(error.get('name'), 			n);
				assert.equal(error.get('code'), 			fixturesStatusList[n]);
				assert.equal(error.get('message'), 		message);
				assert.equal(error.get('requestId'), 	requestId);
				assert.ok(jsons.indexOf(message) 			!= -1);
				assert.ok(jsons.indexOf(requestId) 		!= -1);
			}
		});
	});
})();