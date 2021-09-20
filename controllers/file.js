exports.install = function() {
    ROUTE('FILE /download/*', get_file);
    ROUTE('POST /upload', save_file, ['upload'], 1024*5);
}

function get_file(req, res) {
    var fs = FILESTORAGE('file');

    res.filefs('file', req.split[1].replace('.' + req.extension, ''));
}

function save_file() {
    var self = this;
    var output = []
    self.files.wait(
        function(file, next) {
            var obj = {};
            obj.filename = file.filename;
            obj.id = UID();
            obj.ext = file.extension;
            obj.url = `/download/${obj.id}.${obj.ext}`
            file.fs('file', obj.id, obj.url, function(err) {
                if (!err) {
                    output.push(obj)
                }
                next();
            })
        },
        function() {
            self.json(output);
        }
   )
}