
NEWSCHEMA('Users', function(schema) {
    schema.define('name', 'String', true, 'Name must be supplied');
    schema.define('age', 'Number', age=>(age < 150 && age > 1), 'Incorrect age supplied');
    schema.define('id', 'UID', true);
    
    schema.setQuery(function($, model){
        DBMS().find('users').callback($.callback);
    })

    schema.addWorkflow('console', function($, model) {
        console.log(model);
        $.success();
    })

    // schema.setUpdate()
    // schema.setPatch()
})