## Timers and APIs


### 1 

1. setTimeout method - `setTimeout` `javascript` `vocab`

    :question: What JavaScript method runs a function after a specified amount of time?
    * setRerun
    * setItAgain
    * setRepeat
    * setTimeout :white_check_mark:

### 2 

1. Timed repeated code - `javascript` `setInterval` `vocab`

    :question: The ____ JavaScript method can be used to run a function every specified amount of time.
    * setRerun
    * setInterval :white_check_mark:
    * setRepeat
    * setTimeout

### 3 

1. Ending timers - `javascript` `vocab` `clearTimeout`

    :question: To end a timer that was previously set, we can use the ____ JavaScript method.
    * resetTimeout
    * stopInterval
    * resetInterval
    * clearTimeout :white_check_mark:

### 4 

1. setInterval method - `javascript` `setInterval`

    :question: What will be the result of running the following code:
    ```JavaScript
    var windowTimeout = setInterval(function() {
        console.log("hi!");
    }, 2000);
    ```
    * The program will stop running after two seconds
    * The word "hi!" will be logged to the console every two seconds :white_check_mark:
    * The browser will logged to the console the word "hi!" 2000 times in a row
    * The word "hi!" will be logged to the console every two minutes

### 5 

1. setTimeout and setInterval functions - `javascript` `callback` `vocab`

    :question: The functions passed to setTimeout and setInterval are examples of ____ functions.
    * callback :white_check_mark:
    * standard
    * inner
    * outer

### 6 

1. Steps a computer can take - `vocab` `algorithm`

    :question: A set of steps that a computer can take to solve a particular problem is known as ____.
    * software
    * a database
    * an algorithm :white_check_mark:
    * a website

### 7 

1. API acronym - `API` `vocab`

    :question: API is an acronym for ___.
    * Available Program Ideas
    * Absolute Protocol Interface
    * Algorithm Parsed Illustration
    * Application Programming Interface :white_check_mark:

### 8 

1. AJAX acronym - `vocab` `AJAX`

    :question: AJAX is an acronym for ___.
    * Asynchronous JavaScript and XML :white_check_mark:
    * Approximate JavaScript Available XML
    * Application JavaScript API XML
    * Algorithm JavaScript as eXchange

### 9 

1. AJAX requests - `AJAX` `syntax`

    :question: What two properties can be used in the jQuery AJAX method to retrieve data from from a url?
    * API key and response
    * url and method :white_check_mark:
    * request and post object
    * parse and method

### 10 

1. JSON acronym - `JSON` `vocab`

    :question: JSON is an acronym for ___.
    * JavaScript Only Navigation
    * Jumbled Size Operator Narrowing
    * JavaScript Object Notation :white_check_mark:
    * None of the above

### 11 

1. API purpose - `API` `vocab`

    :question: APIs can be used for:
    * retrieving data from someone else's database
    * utilizing someone else's more complex functionality
    * controlling other hardware and software
    * all of the above :white_check_mark:

### 12 

1. API usage - `API` `vocab`

    :question: The total count of APIs in existence is ___.
    * under 100
    * approximately 100 to 1,000
    * approximately 1,000 to 100,000
    * over 1,000,000 :white_check_mark:

### 13 

1. Data between APIs - `JSON` `vocab` `API`

    :question: ____ is the common format for sending data between APIs.
    * FTP
    * JSON :white_check_mark:
    * Array
    * Function

### 14 

1. Building API URLs - `parameter` `API` `vocab`

    :question: In the URL, ___ can be included in order to filter the results from an API.
    * query parameters :white_check_mark:
    * files
    * repos
    * authorizations

### 15 

1. Correctly building API URLs - `API` `vocab` `API documentation`

    :question: What is the best resource to properly use a specific API?
    * JavaScript syntax guides
    * The API's official documentation :white_check_mark:
    * W3Schools
    * TeamTreehouse

### 16 

1. API data - `API` `AJAX` `response` `syntax`

    :question: In the code below, where is all the data from the API being returned to after the AJAX call is made?
    ```JavaScript
    $.ajax({
        url: queryURL;
        method: "GET"
    }).done(function(res) {
        console.log("completed");
    });
    ```
    * within queryURL
    * within the res variable :white_check_mark:
    * within the GET method
    * it is not stored

### 17 

1. .done function purpose - `.done` `vocab`

    :question: In the code below, what will be logged to the console?
    ```JavaScript
    $.ajax({
        url: queryURL;
        method: "GET"
    }).done(function(res) {
        console.log("A");
    });
    console.log("B");
    ```
    * A then B 
    * B then A :white_check_mark:
    * Only A 
    * Only B

### 18 

1. Nature of JavaScript - `JavaScript` `synchronous` `vocab`

    :question: JavaScript is ___ by nature.
    * synchronous :white_check_mark:
    * strongly typed
    * asynchronous
    * unscripted

### 19 

1. Callback functions and promises - `callback` `promise` `vocab` `asynchronous`

    :question: Say that we execute process A and then continue with the execution of other processes while process A is still executing. Process A is then resolved after some time passes and the callback function within process A executes the code. Process A is an example of ____. 
    * syntactic sugar
    * synchronous programming
    * event handling
    * asynchronous programming :white_check_mark: