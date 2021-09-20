exports.install = function() {
    ROUTE('GET /api/users      *Users --> query');
    ROUTE('PUT /api/users      *Users --> console (response) update');
};