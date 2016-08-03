var HTTPStatus = require(__dirname + '/HTTPStatus.js');
var statusList = HTTPStatus.all();

var LambdaError = {
	
};

var ErrorObject = function(data) {
	this.data = data;
}

ErrorObject.prototype.get = function(key) {
	return this.data[key];
}

ErrorObject.prototype.toString = function() {
	return JSON.stringify(this.data);
}

ErrorObject.prototype.withContext = function(context) {
	this.data.requestId = context.awsRequestId;
	
	return this;
}

var addStatusMethod = function(code, name) {
	LambdaError[name] = function(message) {
		return new ErrorObject({
			code: code, 
			name: name,
			message: message
		});
	};
}


for (var n = 0, m = statusList.length; n<m; n++) {
	var status = statusList[n];
	
	addStatusMethod(status.code, status.name);
}

module.exports = LambdaError;