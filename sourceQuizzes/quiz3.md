## JavaScript


### 1 

1. Declaring - `javascript` `var` `vocab`

    :question: Variables can be declared in JavaScript using the ____ keyword.
    * var :white_check_mark:
    * value
    * val
    * variable

### 2 

1. Variable Types - `javascript` `var` `boolean` `string` `number` `vocab`

    :question: Commonly used data types DO NOT include:
    * strings
    * booleans
    * alerts :white_check_mark:
    * numbers

### 3 

1. Strings - `javascript` `string` `vocab`

    :question: String values must be enclosed within ____ when being assigned to variables.
    * commas
    * curly brackets
    * quotes :white_check_mark:
    * parentheses

### 4 

1. Debugging - `javascript` `console.log` `vocab`

    :question: A very useful tool used during development and debugging for printing content to the debugger is:
    * JavaScript
    * terminal / bash
    * for loops
    * console.log :white_check_mark:

### 5 

1. Adding variables - `javascript` `var` `adding`

    :question: What is the value of c in the following code?
    ```JavaScript
    var a = 3;
    var b = '3';
    var c = a + b;
    ```
    * 6
    * '33' :white_check_mark:
    * ab
    * This will cause an error

### 6 

1. User Input - `javascript` `prompt` `vocab`

    :question: We can ask a user for their name by using ____ popup box in the browser.
    * a confirm
    * an alert
    * an ask
    * a prompt :white_check_mark:

### 7 

1. Writing to a Page - `javascript` `vocab` `document.write`

    :question: We can use JavaScript to directly write to the HTML page itself by using:
    * console.log
    * document.write :white_check_mark:
    * variables
    * This is not possible with JavaScript

### 8 

1. If / Else Statements - `if/else` `javascript` `vocab`

    :question: If / Else statements are best suited for ____.
    * making decisions :white_check_mark:
    * setting up arrays
    * interacting with users
    * performing calculations

### 9 

1. If / Else Syntax - `if/else` `javascript` `syntax`

    :question: The condition in an if / else statement is enclosed within ____.
    * quotes
    * curly brackets
    * parentheses :white_check_mark:
    * square brackets

### 10 

1. Arrays - `javascript` `arrays` `vocab`

    :question: Arrays in JavaScript can be used to store ____.
    * numbers and strings
    * other arrays
    * booleans
    * all of the above :white_check_mark:

### 11 

1. Array elements - `javascript` `arrays` `index` `vocab`

    :question: The specific element stored within an array can be targeted using the element ____.
    * value
    * index :white_check_mark:
    * location
    * length

### 12 

1. Getting Arrray Values - `javascript` `arrays` `index` `syntax`

    :question: What is the value of myValue in the code below?
    ```JavaScript
        var myArray = ["dog", "cat", "mouse"];
        var myValue = myArray[1];
    ```
    * 1
    * dog
    * cat :white_check_mark:
    * mouse

### 13 

1. Total Array Elements - `javascript` `arrays` `array.length` `vocab`

    :question: We can get the number of elements in an array using the ____ property.
    * count
    * size
    * variable
    * length :white_check_mark:

### 14 

1. Repeating Code - `javascript` `for loops` `vocab`

    :question: We can run repeated blocks of code using ____.
    * for loops :white_check_mark:
    * if / else statements
    * arrays
    * browser refresh

### 15 

1. Comparing Variables - `javascript` `comparison` `vocab`

    :question: We can check to see if two values are equal using ____.
    * ?==
    * !==
    * === :white_check_mark:
    * =

### 16 

1. For Loop Counter Variables - `javascript` `for loops` `iterators` `vocab`

    :question: The counter variable in a for loop is also known as the ____.
    * iterator :white_check_mark:
    * condition
    * return
    * block

### 17 

1. Looping Through Arrays - `javascript` `arrays` `for loops` `array.length` `index`

    :question: What is the value of myValue after running the code below?
    ```JavaScript
        var myValue = 0;
        var myArray = [1, 2, 3, 4];
        for (var i = 1; i < myArray.length; i++) {
            myValue += myArray[i];
        }
    ````
    * 5
    * 6
    * 9 :white_check_mark:
    * 10

### 18 

1. Hooking onto Events - `javascript` `vocab` `document.onkeyup`

    :question: We can hook onto the event of a user pressing and releasing a key by referring to ____.
    * browser.event
    * page.hit
    * event.key
    * document.onkeyup :white_check_mark:

### 19 

1. Getting Key Presses - `javascript` `vocab` `event.key`

    :question: We can get the key a user has pressed by referencing ____.
    * document.onkeyup
    * letter.pressed
    * keyboard.event
    * event.key :white_check_mark:

### 20 

1. ID Element Targetting - `javascript` `document.getElementByID` `vocab`

    :question: We can find a single element on the page that has an ID by using ____.
    * browser.findAllElements
    * document.getElementById :white_check_mark:
    * clicked.getHTMLById
    * document.ElementsByClass

### 21 

1. Adding to Arrays - `javascript` `vocab` `arrays` `push`

    :question: Elements can be added to an array by using the ____ method.
    * push :white_check_mark:
    * add
    * concatenate
    * attach

### 22 

1. Bundling Repetitive Code - `javascript` `vocab` `functions`

    :question: Repetitive lines of code should be bundled together as ____ and then executed as needed.
    * arrays
    * functions :white_check_mark:
    * snippets
    * conditions

### 23 

1. Variables Passed to Functions - `javascript` `vocab` `functions` `arguments`

    :question: A function's ____ are only visible inside the function body.
    * arguments :white_check_mark:
    * arrays
    * strings
    * definitions

### 24 

1. String Manipulation - `javascript` `vocab` `syntax` `charAt`

    :question: To grab the first letter of a string we can use the ____ method.
    * stringItem(0)
    * itemIs(1)
    * charAt(0) :white_check_mark:
    * indexOf(1)

### 25 

1. Building Arrays - `javascript` `arrays` `push` `modulus`

    :question: What will the following code log to the console?
    ```JavaScript
        var myArray = [];

        for (var i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                myArray.push(i);
            }
        }

        console.log(myArray);
    ```
    * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    * [2, 4, 6, 8, 10]
    * [1, 3, 5, 7, 9]
    * [0, 2, 4, 6, 8] :white_check_mark:

### 26 

1. Executing Functions - `javascript` `vocab` `functions`

    :question: In order to actually execute a function we have written, we have to ____ it.
    * run
    * call :white_check_mark:
    * maximize
    * mark

### 27 

1. Converting Strings - `javascript` `vocab` `toLowerCase()`

    :question: We can convert "HELLO" to "hello" using the ____ method.
    * reduceString()
    * toLowerCase() :white_check_mark:
    * allLower()
    * minimizeIt()

### 28 

1. Random Number Generation - `javascript` `vocab` `Math.floor` `Math.random`

    :question: In the code below, the possible values of x are:
    ```JavaScript
        function randomValue() {
            var value = Math.floor(Math.random() * 5);
            return value;
        }

        var x = randomValue();
    ```
    * 0, 1, 2, 3, 4 :white_check_mark:
    * 0, 1, 2, 3, 4, 5
    * 1, 2, 3, 4
    * 1, 2, 3, 4, 5

### 29 

1. Function Scope 1 - `javascript` `functions` `scope`

    :question: What will be logged to the console with the following code:
    ```JavaScript
        var value = 33;

        function myFunction() {
            value = 66;
        }

        myFunction();

        console.log(value);
    ```
    * 33
    * 66 :white_check_mark:
    * 99
    * None of the above - this will cause an error

### 30 

1. Function Scope 2 - `javascript` `functions` `scope`

    :question: What will be logged to the console with the following code:
    ```JavaScript
        var value = 33;

        function myFunction() {
            var value = 66;
        }

        myFunction();

        console.log(value);
    ```
    * 33 :white_check_mark:
    * 66
    * 99
    * None of the above - this will cause an error