exports.install = function() {
	ROUTE('GET /*');
	ROUTE('GET /test', test_route);
};

function test_route() {
	var self = this;
	console.log('hello');

	self.repository.name = 'Peter'

	var model = {
		cities: ['Zurich', 'Athens', 'Banska Bystrica']
	}

	// EXEC('#Users --> update', {data: 'data'}, function(err, res) {

	// })

	self.view('test', model);	
}
