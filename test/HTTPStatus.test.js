(() => {
  'use strict';
	
	
	const fs = require('fs');
  const assert = require('chai').assert;
	const HTTPStatus = require(__dirname + '/../src/HTTPStatus.js')
	const fixturesStatusList = JSON.parse(fs.readFileSync(__dirname + '/fixtures/status.json'));
	
  suite('HTTPStatus', function() {
    test('Count HTTP Status codes', function() {
      assert.equal(HTTPStatus.all().length, Object.keys(fixturesStatusList).length);
    });
		
		test('Check HTTP Status', function() {
			for (var n in fixturesStatusList) {
				var error = HTTPStatus.find(n);
		
				assert.equal(n, error.name);
				assert.equal(fixturesStatusList[n], error.code);
			}
		});
	});
})();