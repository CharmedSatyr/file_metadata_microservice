const express = require('express'),
    app = express(),
    multer = require('multer'),
    path = require('path'),
    upload = multer({dest: 'uploads/'}),
    port = process.env.PORT || 8080;;

app.use('/', express.static(path.join(__dirname + '/views')));
app.post('/', upload.single('user-file'), function(req, res, next) {

    let obj = {
      fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      encoding: req.file.encoding,
      mimetype: req.file.mimetype,
      destination: req.file.destination,
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      'witty comment': req.body['user-file']
    }
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.json(obj);
});

app.listen(port, () => {
    console.log('Listening on port', port);
});
