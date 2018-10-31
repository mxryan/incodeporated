## Express


### 1 

1.  Request handling and responding - `back-end` `vocab`

    :question: The machine and code that handle requests and respond to them are collectively called the ___.
    * server :white_check_mark:
    * client
    * CPU
    * router


### 2 

1. Making requests - `client` `vocab`

    :question: The machine and code that make a request and then await the response are called the ___.
    * server
    * client :white_check_mark:
    * CPU
    * router


### 3 

1. Server Data and Logic - `back-end` `vocab`

    :question: The data and logic stored on the server are referred to as ___.
    * the request
    * AJAX
    * the Front-End
    * the Back-End :white_check_mark:


### 4 

1. Communication flow - `request` `response` `vocab`

    :question: A server typically generates a ____ , after receiving a ____.
    * request, response
    * web page, command
    * response, request :white_check_mark:
    * high-five, kudos


### 5 

1. Server functions - `back-end` `tech-knowledge`

    :question: Server side functions can include:
    * Visiting a URL and then being given an HTML page
    * Clicking on an invoice and being given a PDF report
    * Google providing results relevant to searches
    * All of the above :white_check_mark:


### 6 

1. Client-Server communication - `client` `back-end` `http`

    :question: Clients and Servers communicate using a series of understood communications defined by ___.
    * JSON
    * HTTP/HTTPs :white_check_mark:
    * Google
    * Microsoft


### 7 

1. Server code parts - `back-end` `tech-knowledge`

    :question: The code developers write for a server often includes:
    * Listeners
    * Route handling
    * Authentication
    * All of the above :white_check_mark:


### 8 

1. Communication portal - `port` `vocab`

    :question: A ___ is like a portal through which servers and clients communicate.
    * port :white_check_mark:
    * window
    * terminal
    * modal


### 9 

1. Request types - `get` `vocab`

    :question: HTTP ___ requests supply data from the client to the server within the URL itself.
    * JUMP
    * GET :white_check_mark:
    * JSON
    * POST


### 10 

1. More request types - `post` `vocab`

    :question: HTTP ___ requests supply data from the client to the server within the message body.
    * JUMP
    * GET
    * JSON
    * POST :white_check_mark:


### 11 

1. Creating a server - `express` `vocab`

    :question: ___ is a web framework for Node to make creating code for a server much simpler.
    * SQL
    * JavaScript
    * Express :white_check_mark:
    * NPM


### 12 

1. Including Express - `express` `npm-package`

    :question: Express can be included in your project by first installing it as ___.
    * an NPM package :white_check_mark:
    * a JSON object
    * a stylesheet
    * a browser plugin


### 13 

1. Using Express - `express` `require` `syntax`

    :question: To use the installed Express framework, it can be brought into the application with the code:
    * `var express = require('express');` :white_check_mark:
    * `var express = include('express');`
    * `var express = node('express');`
    * `var express = node('server.js');`


### 14 

1. Express app object creation - `express` `app` `vocab`

    :question: The app object used to denote the Express application is created by calling the ___ function of the Express module.
    * createServer()
    * express() :white_check_mark:
    * initialize()
    * listen()


### 15 

1. Express app methods - `listen` `vocab`

    :question: The ___ method can be used on the Express app object to have the server respond to requests on a specified port.
    * server()
    * request()
    * listen() :white_check_mark:
    * response()


### 16 

1. Express routing - `app.get` `syntax`

    :question: For a server running locally on port 3000, at what URL will the code below cause a console message?
    ``` JavaScript
    app.get('/route', function() {
        console.log('wow');
    });
    ```
    * http://localhost:3000/wow
    * http://localhost:3000/route :white_check_mark:
    * http://localhost:3000
    * http://localhost:3000/console


### 17 

1. Route to browser display - `res.send` `syntax`

    :question: To have the browser display "Hello world!", ___ must be added to the space in the route definition below.
    ``` JavaScript
    app.get('/', function(req, res) {
        ____ ('Hello world!');
    }
    ```
    * req.json
    * res.end
    * req.send
    * res.send :white_check_mark:


### 18 

1. Parsing the URL - `req.params` `vocab`

    :question: For a server running on port 3000, fill in the blank in the code below to log out "hellohello" when the user navigates to localhost:3000/route/hellohello
    ``` JavaScript
    app.get('/route/:word', function(req, res) {
        var thisWord = ___ ;
        console.log(thisWord);
    });
    ```
    * req.word
    * req.word.params
    * req.params.word :white_check_mark:
    * res.params.word


### 19 

1. Parameter modification - `parameters` `syntax`

    :question: A route is defined as `/route/:word?`. The parameter, word, in this case is ___.
    * required
    * lower case
    * upper case
    * optional :white_check_mark:


### 20 

1. body-parser - `body-parser` `vocab`

    :question: body-parser is an example of ___ that transforms the request from the browser into a readable object.
    * middleware :white_check_mark:
    * a database
    * a server
    * a compiler


### 21 

1. Directory path - `__directory` `vocab`

    :question: The ___ keyword is built into Node and evaluates to the absolute path of the current directory.
    * `__dirname` :white_check_mark:
    * `__path`
    * `$PATH`
    * `_currentPath`


### 22 

1. POST with jQuery - `post` `vocab`

    :question: The ___ jQuery method can be used to load data from the server using a HTTP POST request.
    * $.post :white_check_mark:
    * $.load
    * $.send
    * $.onLoad