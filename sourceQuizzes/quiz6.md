## Node


### 1 

1. Web workflow - `vocab` `client` `server`

    :question: The ___ is the physical hardware or software that takes requests from the ___ and gives something back or completes a process.
    * client, server
    * server, client :white_check_mark:
    * API, client
    * client, API


### 2 

1. More web workflow - `vocab` `client` `server`

    :question: Asking for something or some process to happen is called the ___ while what is returned as a result of it is called the ___.
    * request, response :white_check_mark:
    * AJAX, web page
    * response, request
    * request, API


### 3 

1. Server side development - `vocab` `Node`

    :question: ___ allows us to run JavaScript outside of the browser, and on the server instead.
    * HTTP
    * AJAX
    * Node :white_check_mark:
    * NPM


### 4 

1. Node server advantages - `vocab` `Node`

    :question: The advantage of using Node as a server is:
    * Easy extendability with plugins
    * Fast implementation with few lines of code
    * JavaScript use so frontend JavaScript devs can code backend too
    * all of the above :white_check_mark:


### 5 

1. Node server model - `asynchronous` `vocab`

    :question: Node uses ___ threading which allows the server to handle all requests using a single thread through event-based callbacks.
    * perpendicular
    * synchronous
    * multi
    * asynchronous :white_check_mark:


### 6 

1. Executing JS files outside the browser - `syntax` `Node`

    :question: We can use Node to run a JavaScript file outside of the browser from bash/terminal with the command ___.
    * `node filename.js` :white_check_mark:
    * `run filename.js`
    * `filename.js execute`
    * You cannot - it must be run from the browser


### 7 

1. Console logging from Node - `Node` `tech-knowledge`

    :question: The file hello.js includes the code shown below. Where would the output be seen if hello.js was run using node from a bash/terminal window?
    ```JavaScript
    console.log('hello');
    ```
    * the browser window
    * the bash/terminal window :white_check_mark:
    * the browser's developer tools console
    * no output would be seen


### 8 

1. Purpose of process.argv - `process.argv` `vocab`

    :question: The process.argv property can be used to get all the ___.
    * files in the folder
    * active Node threads
    * command line arguments :white_check_mark:
    * bash/terminal process history


### 9 

1. Adding with process.argv - `process.argv` `tech-knowledge` `syntax`

    :question: The file runMe.js contains the code shown below. What will be the output of executing the command `node runMe.js 5 5`?
    ```JavaScript
    console.log(process.argv[2] + process.argv[3]);
    ```
    * 5
    * 10
    * 23
    * 55 :white_check_mark:


### 10 

1. parseFloat and parseInt - `parseFloat` `parseInt` `vocab`

    :question: The parseFloat and parseInt JavaScript functions can be used to parse an argument into ___.
    * a number :white_check_mark:
    * a string
    * an array
    * a query


### 11 

1. Basics of modularization - `require` `vocab`

    :question: When writing JavaScript files that use Node, we can bring in code exported from another file using the ___ keyword.
    * imports
    * module.imports
    * require :white_check_mark:
    * require.imports


### 12 

1. Modularization example - `require` `syntax` `dot-notation`

    :question: The file foods.js contains the code shown below. How would snickers be referenced in another file that had imported foods.js into the variable foods?
    ```JavaScript
    var yummies = {
        candy: "snickers",
        soda: "pepsi",
        chips: "lays"
    }

    module.exports = {
        yummies: yummies
    }
    ```
    * foods.yummies.candy :white_check_mark:
    * yummies.candy
    * foods.candy
    * foods.yummies


### 13 

1. Node FS package - `fs` `Node` `vocab`

    :question: The internal Node package `fs` is used for ___.
    * creating NPM packages
    * making AJAX requests
    * interacting with files :white_check_mark:
    * DOM updates


### 14 

1. Reading file data - `fs` `data.split` `syntax`

    :question: The contents of the file data.txt are `i,love,coding` What will be the output of the code below?
    ```JavaScript
    var fs = require("fs");
    fs.readFile("data.txt", "utf8", function(err, data) {
        var output = data.split(",");
        console.log(output);
    });
    ```
    * `i love coding`
    * `i,love,coding`
    * `['i', 'love', 'coding']` :white_check_mark:
    * `{data: "i, love, coding"}`


### 15 

1. Adding to files - `fs` `tech-knowledge`

    :question: The ___ method of the Node `fs` package is used to add content to an existing file.
    * appendToFile
    * writeFile
    * continueFile
    * appendFile :white_check_mark:


### 16 

1. Adding pre-made code to Node apps - `npm` `vocab`

    :question: ___ allows us to quickly incorporate pre-made code snippets into Node applications.
    * The Node Package Manager :white_check_mark:
    * An API
    * GitHub
    * Web scraping


### 17 

1. Installing external packages - `npm` `syntax`

    :question: External packages needed by your Node app can be added with the command:
    * node install \<packagename\>
    * npm add \<packagename\>
    * node add \<packagename\>
    * npm install \<packagename\> :white_check_mark:


### 18 

1. Using the request NPM package - `request` `syntax`

    :question: The code below shows an example of using the request NPM package to make a call to an API. Assume no API key is required. The useful data will be contained in the ___ variable as ___.
    ```JavaScript
    var request = require("request");
    request("http://www.omdbapi.com/?t=avatar", function(err, response, body) {
        // do something
    });
    ```
    * body, a JSON object
    * response, an array
    * err, an integer
    * body, a string :white_check_mark:


### 19 

1. Purpose of JSON.parse - `JSON.parse` `vocab`

    :question: The JSON.parse() method parses a JSON ___, constructing the JavaScript object it describes.
    * object
    * array
    * string :white_check_mark:
    * module


### 20 

1. Package management - `npm` `syntax` `package.json`

    :question: Any NPM packages that an application is dependent on should be listed in ___.
    * the package.json file :white_check_mark:
    * a readme file
    * the GitHub repository
    * a separate text file


### 21 

1. Adding dependencies - `npm` `syntax` `package.json`

    :question: What command is used to create a package.json file?
    * npm add package.json
    * npm init :white_check_mark:
    * node package.json --save
    * node create --add --save


### 22 

1. Installing dependencies - `npm` `syntax` `package.json`

    :question: When a Node application with correctly listed dependencies is shared, the subsequent developer can run the command ___ to re-download all the required NPM packages.
    * node install -all
    * npm add -all
    * npm install :white_check_mark:
    * node add dependencies