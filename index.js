var express = require('express');
var app = express();

// These are to define who is returned when /images, /styles, and /fonts is
// navigated to.
app.use('/images', express.static('public/images'));
app.use('/styles', express.static('public/styles'));

app.set('view engine', 'pug');

// This will get all requests to this server
// The view uses Pug as the template language which allows us to dynamically
// pass values to the template so that the one template will give you all three
// Maintenance Sites.
app.get('*', function (req, res) {
    if (
        req.hostname === 'example.com' ||
        req.hostname === 'www.example.com'
    ) {
        // Is it example.com?
        res.render('index', { site: 'example', siteName: 'Example Site'});
    } else if (
        // What about foobar.com?
        req.hostname === 'foobar.com' ||
        req.hostname === 'www.foobar.com'
    ) {
        res.render('index', { site: 'foobar', siteName: 'Foo Bar'});
    } else {
        // Everything else should render baz
        res.render('index', { site: 'baz', siteName: 'Baz'});
    }
});

// Set the port. 80 requires root access.
var port = 80;
app.listen(port);
