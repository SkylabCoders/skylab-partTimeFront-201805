# jQuery [timing 30m]

## Goals

- jQuery basic functions

## Tasks

### Description

- jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across multitude of browsers.

### Selectors

- \*

```javascript 
$("*") //All elements
```
- #id 

```javascript 
$("#lastname")// The element with id="lastname"
```
- .class 

```javascript 
$(".intro") // All elements with class="intro"
```
- .class, .class
  
```javascript 
    $(".intro,.demo")//  All elements with the class "intro" or "demo"
```
- element 

```javascript 
    $("p")  All <p> elements
```
- el1, el2, el3 

```javascript 
    $("h1,div,p") //All <h1>, <div> and <p> elements
```

### DOM Traversal and Manipulation

Manipulate the client side adding text or showing information after events.

- .html()
Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.

```html
<span>Hello</span>
<div></div>
<div></div>
<div></div>
```
```javascript
$( "div" ).html( "<span class='red'>Hello <b>Again</b></span>" ); // set <span class='red'>Hello <b>Again</b></span> inside every div
```

- .append()
Insert content, specified by the parameter, to the end of each element in the set of matched elements.

```html
<h2>Greetings</h2>
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```
```javascript
$( ".inner" ).append( "<p>Test</p>" ); // adding a new p tag after Goodbye div
```

- .text()
Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.

```html
<p>Test Paragraph.</p>
```
```javascript
$( "p" ).text("and some more text") // adding some text to p tag
```

- .val()
Get the current value of the first element in the set of matched elements or set the value of every matched element.

```html
<input type="text" value="some text">
```
```javascript
$( "input" ).val() // some text
```

- each()
Iterate over a jQuery object, executing a function for each matched element.

```html
To do list: <span>(click here to change)</span>
<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Be merry</li>
</ul>
```
```javascript
$( "span" ).click(function() {
  $( "li" ).each(function() {
    $( this ).append( "<p>Adding text...</p>" );
  });
});
```

- .attr()
Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.

```html
<p>Once there was a <em title="huge, gigantic">large</em> dinosaur...</p>
```
```javascript
$( "em" ).attr("title") // huge, gigantic
```

- hide( [duration ] [, complete ] ) & .show( [duration ] [, complete ] )
Hide/show the matched elements (apply the attribute hidden to matched elements).

```javascript
$( "button.continue" ).show( 1000, function(){console.log('animation complete')} ) // the first param determining how long the animation will run, the second a function to call once the animation is complete, called once per matched element.
```


### Event Handling

Asociate events to HTML tags for dotate them of logical instructions.

- .on( events [, selector ] [, data ], handler )
Attach an event handler function for one or more events to the selected elements.

```html
<div>
    <button>Click me for magic</button>
</div>
```
```javascript
$( "button" ).on('click', function(){
    alert('You clicked me!')
}) // some function asociate to button
```

- error()
Bind an event handler to the “error” JavaScript event.

```javascript
// If missing.png is missing, it is replaced by replacement.png
$( "img" )
  .error(function() {
    $( this ).attr( "src", "replacement.png" );
  })
  .attr( "src", "missing.png" );
```

### Ajax

- You can do AJAX Requests to a Server API for extract information and show it in client.
Example:
```html
<div>
    <p></p>
</div>
```
```javascript
$.ajax( "some url" )
  .done(function(info) {
    $(" p ").text(info) //selects the p element and writes the content of AJAX call 
  })
```
