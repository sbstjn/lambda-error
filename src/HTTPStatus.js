var statusList = [
	{
		"name": "BadRequest",
		"code": 400
	},
	{
		"name": "Forbidden",
		"code": 403
	},
	{
		"name": "NotFound",
		"code": 404
	},
	{
		"name": "Conflict",
		"code": 409
	},	
	{
		"name": "InternalServerError",
		"code": 500
	}
];

module.exports = HTTPStatus = {
	find: function(search) {
		return statusList.filter(function(error) {
			return error.name == search || error.code == search;
		}).pop();
	},
	all: function() {
		return statusList;
	}	
};
