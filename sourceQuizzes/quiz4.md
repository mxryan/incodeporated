## JavaScript and jQuery


### 1 

1. Object Syntax - `javascript` `syntax` `object`

    :question: When defining an object, its property-value pairs are enclosed within ____.
    * parentheses
    * curly brackets :white_check_mark:
    * colons
    * square brackets

### 2 

1. Object Bracket Notation - `javascript` `syntax` `object` `bracket notation`

    :question: In terms of objects, how would one use bracket notation to refer to a value that is not a variable?
    * object["property"] :white_check_mark:
    * object(property)
    * object("property")
    * object-property

### 3 

1. Object Dot Notation - `javascript` `syntax` `object` `dot notation`

    :question: In terms of objects, how would one use dot notation to refer to a value?
    * object.[property]
    * property.object
    * object.property :white_check_mark:
    * property.[object]

### 4 

1. Object Self Referencing - `javascript` `object` `this` `vocab`

    :question: The ____ keyword is simply a way to reference the object itself.
    * object
    * item
    * it
    * this :white_check_mark:

### 5 

1. Object Functions - `javascript` `object` `method` `vocab`

    :question: Functions that are properties of objects are also known as ____.
    * steps
    * tasks
    * methods :white_check_mark:
    * functions

### 6 

1. Objects Example - `javascript` `object` `method`

    :question: What will be logged to the console with the following code?
    ```JavaScript
        var myObject = {
            myNumber: 30,
            myFunction: function() {
                this.myNumber += 30;
                console.log(myObject.myNumber);
            }
        }

        myObject.myFunction();
    ```
    * 30
    * 60 :white_check_mark:
    * 3030
    * undefined

### 7 

1. Variable Scope - `javascript` `scope` `vocab`

    :question: Variables that we can refer to everywhere are known as ____ variables.
    * global :white_check_mark:
    * permanent
    * eternal
    * primary

### 8 

1. Function Arguments - `javascript` `functions` `syntax` `scope`

    :question: What will be logged to the console with the following code?
    ```JavaScript
        var myFunction = function(someCar) {
            var myCar = someCar;
        }

        myFunction("Honda");

        console.log(myCar);
    ```
    * someCar
    * myFunction
    * Honda
    * ReferenceError: myCar is not defined :white_check_mark:

### 9 

1. Alternative to For Loops - `javascript` `forEach` `vocab` `JS vs jQuery`

    :question: What is another JavaScript method that is used to loop over arrays or Objects?
    * loopOver
    * readAll
    * $.each
    * forEach :white_check_mark:

### 10 

1. Browser Interpretation - `javascript` `DOM` `vocab`

    :question: Effectively, the ____ is the version of HTML / CSS interpreted by the browser.
    * DOM :white_check_mark:
    * program
    * debugger
    * console

### 11 

1. Populating Elements - `javascript` `innerHTML` `vocab` `JS vs jQuery`

    :question: Without using jQuery, HTML elements on a page can be populated using the ____ property.
    * .text()
    * innerHTML :white_check_mark:
    * div
    * script

### 12 

1. Coding a New Div - `javascript` `createElement` `vocab` `JS vs jQuery`

    :question: Without using jQuery, we can code a new div with the following:
    * createElement("div") :white_check_mark:
    * $("&lt;div&gt;")
    * makeDivElement()
    * createNew("div")

### 13 

1. Attaching to an Element - `javascript` `appendChild` `vocab`

    :question: Once a new div has been coded, it can be attached to an element on the page with the ____ JavaScript method.
    * placeDiv
    * appendChild :white_check_mark:
    * createPosition
    * setElement

### 14 

1. Changing Element CSS Styling - `javascript` `setAttribute` `vocab` `JS vs jQuery`

    :question: Without using jQuery, a CSS style of an element can be manipulated using the ____ method.
    * adjustCSS
    * .css()
    * setAttribute :white_check_mark:
    * setStyle

### 15 

1. What is jQuery? - `jQuery` `vocab`

    :question: jQuery is a cross-platform JavaScript ____ for easier client-side scripting.
    * command
    * template
    * table
    * library :white_check_mark:

### 16 

1. jQuery Purposes - `jQuery` `vocab`

    :question: jQuery can be useful for tasks such as:
    * Dynamically inserting, updating, or removing HTML
    * Registering click or other change events
    * Downloading data from databases
    * All of the above :white_check_mark:

### 17 

1. jQuery Selectors - `jQuery` `syntax`

    :question: A div with the id of myDiv can be targeted using jQuery by typing:
    * $("#myDiv") :white_check_mark:
    * $(.myDiv)
    * $("myDiv")
    * $div

### 18 

1. jQuery Button Creation - `jQuery` `syntax` `button`

    :question: A new button can be created using jQuery and assigned to a variable using the following code:
    * `var newButton = $newButton;`
    * `var newButton = $("<button>");` :white_check_mark:
    * `var newButton = create.button;`
    * `var newButton = button("new");`

### 19 

1. Attaching divs with jQuery - `jQuery` `syntax` `append`

    :question: A page contains a div with the id "emptyDiv". jQuery may be used to attach a div named newDiv to it with the following code:
    * `$(emptyDiv).appendChild(newDiv);`
    * `$("emptyDiv").appendChild(newDiv);`
    * `$("#emptyDiv").append(newDiv);` :white_check_mark:
    * `$("#emptyDiv").attach(newDiv);`

### 20 

1. Iterating with jQuery - `jQuery` `each` `vocab`

    :question: The ____ jQuery method can be used to iterate over an array without using a for loop.
    * .loop
    * .iterate
    * .every
    * .each :white_check_mark:

### 21 

1. HTML Loading Delay - `javascript` `vocab` `document.ready`

    :question: ____ makes sure that our JavaScript code doesn't get run until the HTML document is finished loading.
    * document.ready :white_check_mark:
    * page.loaded
    * document.complete
    * process.ended

### 22 

1. jQuery Listeners - `jQuery` `on-click` `syntax`

    :question: We can use jQuery to create a listener that listens for a click on all elements with the class myClass using:
    * `$(".myClass").on("click", function() { ... });` :white_check_mark:
    * `$(".myClass").on(function() { ... });`
    * `$".myClass").on("press", function() { ... });`
    * `$(".myClass").on(clickMe!, function() { ... });`

### 23 

1. jQuery Attaching to Top of Element - `jQuery` `prepend` `vocab`

    :question: To attach an element to the beginning of another element, we can use the ____ jQuery method.
    * .append
    * .attach
    * .start
    * .prepend :white_check_mark:

### 24 

1. jQuery Options - `jQuery` `syntax`

    :question: Writing ____ is equivalent to writing $() when using the jQuery library.
    * jQuery() :white_check_mark:
    * select()
    * click()
    * library()

### 25 

1. jQuery Data Attributes - `jQuery` `attr` `vocab`

    :question: The _____ jQuery method can be used to place attributes on HTML elements
    * .attribute
    * .append
    * .attr :white_check_mark:
    * .info

### 26 

1. jQuery Element Classes - `jQuery` `vocab` `addClass`

    :question: We can give classes to elements using the ____ jQuery method.
    * .addClass :white_check_mark:
    * .giveClass
    * .setClass
    * .attrClass

### 27 

1. Button Displayed Name with jQuery - `jquery` `text` `vocab`

    :question: A button with an id of myButton can be set to have its displayed name show as "SuperButton" with the following jQuery code:
    * `$("#myButton").name("SuperButton");`
    * `$("#myButton").text("SuperButton");` :white_check_mark:
    * `$("#myButton").set("SuperButton");`
    * `$#myButton("SuperButton");`

### 28 

1. More JavaScript Scoping - `javascript` `scope` `vocab`

    :question: In JavaScript, ____ functions can access ____ variables, but not vice versa.
    * parent, child
    * all, child
    * parent, all
    * child, parent :white_check_mark:

### 29 

1. What is this? - `javascript` `this` `Window`

    :question: What will the code below log to the console when run in a browser?
    ```JavaScript
        function myFunction() {
            console.log(this);
        }

        myFunction();
    ```
    * this
    * Window :white_check_mark:
    * myFunction
    * null

### 30 

1. Parsing Objects - `javascript` `object` `dot notation`

    :question: With the code below, how would you log "lizard" to the console?
    ```JavaScript
        var group = {
            large: {
                creatures: "blue whale",
                medium: {
                    creatures: ["zebra", "rhino", "hippo"],
                    small: {
                        creatures: "cat",
                        tiny: {
                            creatures: ["snail", "hamster", "lizard", "spider"]
                        }
                    }
                },
                other: {
                    creatures: "human"
                }
            }
        };
    ```
    * `console.log(group.large.medium.small.tiny.creatures[2]);` :white_check_mark:
    * `console.log(group.tiny.creatures[2]);`
    * `console.log(group.tiny.creatures.lizard);`
    * `console.log(group.large.medium.small.tiny.creatures[lizard]);`