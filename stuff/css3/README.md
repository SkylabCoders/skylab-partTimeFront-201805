# CSS SELECTORS

Selectors allow to target rules for specific elements in an HTML document.

## Selector types:


- Universal selector: `*{}`
- Type selecors: `element {}`
- Class selectors: `.className{}`
- Id selectors: `#idName{}`
- Descendant selector: `p a{}`
- Child selector: `li>a{}`
- Adjacent sibling selector: `h1+p{}`
- General sibling selector: `h1~p{}`

Attribute selectors:
- existence:`[]`
`p[class]` *Targets any `<p>` element with an attribute called class.*

- Equality: `[=]`
`p[class="dog"]` *Targets any `<p>` element with an attribute called class whose value is dog.*

- Space: `[~=]`  
`p[class~="dog"]` *Targets any `<p>` element with an attribute called class whose value is a list of space-separated words, one of witch is dog.*

- Prefix: `[^=]`
`p[attr^"d"]` *Targets any `<p>` element with an attribute whose value begins with the letter d.*

- Substring: `[*=]`
`p[attr*"do"]` *Targets any `<p>` element with an attribute whose value contains the letters do.*

- Suffix: `[$=]`
`p[attr$"g"]` *Targets any `<p>` element with an attribute whose value ends with the letter g.*

Css selectors are case sensitive.

There are more advanced selectors, **attribute selectors**


# Css rules CASCADE:

If there are two or more rules applied to the same element is important to know which will take preference.

- If the two selectors are identical, the latter of the two will take precedence.
- If one selector is more specific than the others, the more specific rule will take precedence over more general ones.
*General sibling selector > adjacent sibling selector > child selector > id selector > class selector > type selector > universal selector*

- You can add `!important` after any property value to indicate that it should be considered more important than other rules that apply to the same element*

# INHERITANCE

There are some properties in css that are inherited by the child elements of an html tag, But there others aren't.

You can force a lot of properties to inherit values from their parent elements by using `inherit` for the value of the properties.


# COLOR

You can specify the color of an html element in three main ways:

- Color name: (blue)
- Hexadecimal code: (#ee3e80)
- RGB value: (100, 100, 90)
- HSLA: (0, 100%, 100%, 0.5) = (angle, saturation, lightness, alpha)

    h1 {
      color: red;
      background-color = blue;
    }

`color` is used to change the letter color, `background-color` is used to change the color of the html element box.

# TEXT

## Typefaces:
    font-family

`font-family` property allows you to specify the typeface that chould be used for any text inside the elements to which css rules applies.

The value is the name of the typeface you want to use.

The user needs the typeface installed on his computer.

You can list some typefaces separated by commas so that, if the user does not have your first choice of typeface installed, the browser can try to use an alternative font from the list.

If the font name is made by two or more words, it should be put into doublw quotes.

## Using more fonts:

    @font-face

`@font-face` allows you to use a font, even if is not installed on the computer of the person browsing, by allowing you to specify a path to a copy of the font, which will be downloaded if it is not on the user´s machine.

    @font-face {
      font-family: 'ChunkFiveRegular';
      src: url('fonts/chunkfive.eot');
      format('svg')
    }

*That is an example of the `@font-face` method*

`font-family`: specifies the name of the font. This name can then be used as a value of the fot-family property in the rest of the style sheet.

`src`: specifies the path to the font.

`format`: specified the format in that the font is supplied in.

## Size:

    font-size

`font-size` property enables you to specify a size for the font.

You can specify that in pixels, percentages or ems, that is equivalent to the size of the letter m.

## Text remarking:

### Bold

    font-weight

`font-weight` allows to create bold text. It could take two values, normal or bold.

### Italic

    font-style

`font-style` to create italic text. It could take three values: normal, italic and oblique.

## Uppercase and lowercase

    text-transform

`text-transform` is used to change the case of text giving it one of the following values: uppercase, lowercase, capitalize.

*Recomended to use letter-spacing property to improve visualization*

## Underline and strike:

    text-decoration

`text-decoration` property allows to specify one of these values: none, underline, overline, line-through and blink.

## Leading:

    line-height

Leading refers to the vertical space between lines of text. `line-height` property sets the weight of an entire line of text, so the difference between the font-size and the line-height is equivalent to the leading.

## Letters and word spacing:

    letter-spacing

`letter-spacing` property is used to set the space between letters.

    word-spacing

`word-spacing` property is used to control the separation between words.

## Text alignment:

### Vertical alignment:

    text-align

`text-align` property allows you to control the alignment of text. This can take one of four values: left, right, center and justify.

### Horizontal alignment:

    vertical-align

`vertical-align` property is used with inline elements performing a task similar to the align html attribute, the values it could take are: baseline, sub, super, top, text-top, middle, bottom, text-bottom. It can also take a lenght or percentage of the line height.

## Indenting text:

    text-indent

`text-indent` property allows you to indent the first line of text within an element. The amount you want the line indented by can be specified in a number of ways but is usually given in pixels or ems. It can take negative values pushing text off the browser window.

## Drop shadow:

    text-shadow

`text-shadow` property is used to create a drop shadow. It can take three lengths and a color. (left-right, top-bottom, blur, color).

## First letter or line:

You can specify different values for the first letter of first line of text inside an element using

    :first-letter
    :first-line

They are pseudo-elements.

You specify the pseudo-element at the end of the selector, and then specify the declarations as you would normally do for any other element.

    p.intro:first-letter {
      font-size: 40px;
    }

## Styling links:

There are two pseudo-classes that allows you to set different styles for links that have and have not yet been visited. Those pseudo-classes are used to control the apereance of the links.

`:link` allows you to set styles for links that have not yet been visited.

`:visited` allows you to set styles for links that have been clicked on.

`:hover` Changes the apereance when a user hover over a link.

`:active` changes the apereance when an element is being clicked.

`:focus` applied when an element has focus. For example a text box that highlighting when using it.



    a:link {
      color: deeppink;
      text-decoration: none;
    }

    a:visited {
      color: black;
    }

    a:hover {
      color: deeppink;
      text-decoration: underline;
    }

    a:active {
      color: darkcyan;
    }


# BOXES

## display
`display: block;`

Make the element a block element.

`display: inline`

Make the element an inline-level element.

`display: inline-block`

Allow the element to behave as block-level element, accepting all box model properties. However, that element will be displayed in line with other elements, and it not begin on a new line by default.

`display: none;`

The element is hidden and all the nested ones too.

## Box resize:

    div {
      height: 400px;
      with: 300px;
    }

height and with properties could be used to change the default size of a box. You can use pixels, percentages of ems.

### Limiting width and height
`min-width`, `max-width`, `min-height` and `max-height` are used to limit the dimensions of a box.

### Overflow

the overflow property tells the browser what to do if the content of the box is larger that the box. It can take two values: hidden or scroll.

## Box properties:

### Border:

#### Border width

`border-width` property is used to control the with of a border. The value of this property can either be given in pixels or using: thin, medium or thick values.

You can control the borders separately with: `border-top-width`, `border-right-width`, `border-bottom-width` and `border-left-width`.

#### Border style

`border-style` property allow you to control the style of a border. You could give these values: solid, dotted, dashed, groove, ridge, inset, outset, hidden / none.

You can control the borders separately with: `border-top-style`, `border-right-style`, `border-bottom-style` and `border-left-style`.

#### Border color:

`border-color` property allows you to change the color of the borders with RGB, HSLA or css color names.

You can control the borders separately with: `border-top-color`, `border-right-color`, `border-bottom-color` and `border-left-color`. You can also use a shorthand method to control the borders separately:

    border-color: blue red green yellow;

*The values appear in clockwise order.*

### Padding

`padding` property allows you to specify the distance between the content of an element and its border.

That property could be specified in pixels, percentages or ems.

You can specify the paddings separately with: `padding-top`, `padding-right`, `padding-bottom` and `padding-left`. Or use the shorthand.

*Caution: that property is inherited to childs.*

### Margin:

`margin` property controls the gat between boxes. Given in pixels, percentages or ems.

If one box sits on the top of another, margins are collapsed, which means the larger of the two margins will be used and the smaller will be disregarded.

You can specify the margins separately with: `margin-top`, `margin-left`, `margin-right` and `margin-bottom` or using the shorthand.

For padding and margin you could use the following shorthand: `margin: 20px 10px`. That means that the side values are 10, and the bottom and top ones are 10px.

## Centering content:

If you want to center the content of an element in the page or in the element it sits in, you can set the left and right margins to auto.

In order to center a box on the page, you need to set a width for the box (otherwise it will take up the full width of the page). Once you have specified the width of the box, setting the sides margins to auto will make the browser put an equal gap on  each side of the box. This centers the box on the page or on the element containing it.

# Inline / block transformation:

`display` property allow you yo turn an inline element into a block-level element or vice versa, and can also be used to hide an element from the page. This property could take those values:

- `inline`: Causes a block-element to act like a inline element.
- `block`: causes a inline-element to act like a block-element.
- `inline-block`: this causes a block-level element to flow like an inline element, while retaining other features of a block-level element.
- `none`: this hides an element from the page. In this case the element acts as thought it is not on the page at all (although a user could still see the content of the box if they used view source).

If you use this property, it is important to know that inline boxes are not supposed to create block-level elements.

## Removing Spaces Between Inline-Block Elements

There are a number of ways to remove the space between inline-block elements, and some are more complex than others. We are going to focus on two of the easiest ways, both of which happen inside HTML.

The first solution is to put each new <section> element’s opening tag on the same line as the previous <section> element’s closing tag. Rather than using a new line for each element, we’ll end and begin elements on the same line.

Writing inline-block elements this way ensures that the space between inline-block elements within HTML doesn’t exist; consequently, the space will not appear when the page is rendered.

Another way to remove the white space between inline-block elements is to open an HTML comment directly after an inline-block element’s closing tag. Then, close the HTML com- ment immediately before the next inline-block element’s opening tag. Doing this allows inline-block elements to begin and end on separate lines of HTML and “comments out” any potential spaces between the elements.

# Hiding boxes:

`visibility` property allows you to hide boxes from users but it leaves a space where he element would have been. This property can take two values: hidden, visible.

If visibility property is set to hidden, a blank space will appear in the place of the element. To avoid the blank space, put the display property to  none.

# Border image:

`border-image` property applies an image to the border of any box. It takes a background image and slices it into nine pieces.

This property requires three pieces of information:

- The url of the image.
- Where to slice the image.
- What to do with the straight edges:
    * `stretch`: stretches the image.
    * `repeat`: repeats the image.
    * `round`: Like the stretch but it scales the image to fit exactly.

The box must also have a border width for the image to be shown.

# Box shadows:

`box-shadow` property allows you to add a drop shadow around a box. It works just like the text shadow property.

It takes four values: (horizontal offset, vertical offset, blur distance and spread of shadow).

# Rounded corners:

`border-radius` property allows you to create rounded corners on any box. Takes a value to indicate the radius of the rounded corner.

You can specify values for every corner separately using `border-top-right-radius`, `border-bottom-right-radius`, `boder-bottom-left-radius` and `border-top-left-radius`. You can also use a shorthand.

## Eliptical border radius:

You can specify the distances of the horizontal and vertical parts of the rounded corners.

    border-radius: 80px 50px;

# Lists:

## Bullet point styles:

`list-style-type` property allows you to control the shape or style of a bullet pint. It can be used on rules that apply to the `<ol>`, `<ul>` and `<li>` elements.

### In unordered lists:

- `none`
- `disk`
- `circle`
- `square`


### In ordered lists:

#### Numbered:
- `decimal`
- `decimal-leading-zero`
- `lower-alpha`
- `upper-alpha`
- `lower-roman`
- `upper-roman`

## Images for bullets:

`list-style-image` property allows you to specify an image to act as a bullet point. Can be aplied to `<ul>` and `<li>` elements.

    list-style-image: url("path");
    margin: 10px 0px 0px 0px.

`margin` is used to increase the vertical gap between each item in the list.

## Positioning the marker:

`list-style-position` property indicates whether the marker have to be inside or outside the box. This property can take two values:
- `outside`: the marker sits on the left of the block text.
- `inside`: the marker sits inside the box of text.

### List shorthand

You can specify the marker´s style, image and position in any order.

    `list-style: inside circle`;

# TABLES:

## Table styling:

- `width`: To set the with of the table.
- `padding`: To set the space between the border of each table cell and its content.
- `text-transform`: To convert the content of the table headers to uppercase.
- `letter-spacing`, `font-size`: To add aditional stylus to the table headers.
- `border-top`, `border-bottom`: To set borders avobe and below table headers.
- `text align`: To align the writting to the left of some table cells and to the right of the others.
- `background-color`: to change the vackground coor of the alternating table rows.
- `:hover`: to highlight a table row when a user´s mouse goes over it.

## Empty cells:

`empty-cells` property is used to specify whether or not the borders of an empty cell will be shown. It can take three values:

- `show`: to show the borders of any empty cell.
- `hide`: to hide the borders of any empty cell.
- `inherit`: if there is a table inside another, it inherit the property.

## Gaps between cells:

`border-spacing` property allows you to control the distance between adjacent cells. That value is taken in px normally. You can give two values for horizontal and vertical spacing.

`border-collapse` allows you to collapse the borders of adjacent cells, avoiding them to be doubled as default. Borders are collapsed to a single one when possible. *Caution: border-spacing will be ignored as well as empty-cells properties.*

`border-separate` property make borders be detached one from each other *Border-spacing and empty-cells will be obeyed*

# STYLING FORMS

## Styling text inputs:

- `font-size`: set the size of the text entered by the user.
- `color`: color for the text.
- `background-color`: sets the background color of the element.
- `border`: adds border around the edge of the imput box.
- `border-radius`: to create rounded corners.
- `:focus`: pseudo-class to focus the element when selected changing its background color.
- `:hover`: pseudo-class that applies the same styles when the user hovers over them.

## Styling submit buttons:

These properties could be used to style submit buttons:

- `color`: changes the color of the text on the button.
- `text-shadow`: can give a 3D effect to the button.
- `border-bottom`: To style the border of the button.
- `background-color`: can make the submit button stand out from other elements.
- `:hover`: pseudo-class that is used to change the apereance of the button when the mouse is over it.

## Styling fieldsets and legends:

`fieldset` is helpful in determinating the edges of a form. They can help grouping together related information within it. The `legend` is used to indicate the type of information that goes on it. Those are the properties used wit these two elements:

- `width`: control the width of the fieldset.
- `color`: to control the color of the text.
- `background-color`: to change the color behing these item.
- `border`: to control the appearance of the border around the fieldset and/or legend.
- `border-radius`: used to soften the border of these elements.
- `padding`: to add space inside these elements.

# Cursor styles:

`cursor` property allows you to control the type of mouse cursor that should be displayed to users. Those are the most commonly used values of that property:
- `auto`
- `crosshair`
- `default`
- `pointer`
- `move`
- `text`
- `wait`
- `help`
- `url("cursor.gif")`

# STYLESHEETS:

`position` property allow you to place the html elements in a certain position.

The position property identifies how an element is positioned on a page and whether or not it will appear within the normal flow of a document. This is used in conjunction with the box offset properties—top, right, bottom, and left—which identify exactly where an element will be positioned by moving elements in a number of different directions.

By default every element has a position value of static, which means that it exists in the normal flow of a document and it doesn’t accept any box offset properties. The static value is most commonly overwritten with a relative or absolute value, which we’ll examine next.

    position: static;

## Normal flow:

In normal flow, each block-level element sits on top of the next one. Since this is the default way in which browsers treat HTML elements, you do not need css property to indicate that elements should appear in normal flow, but the syntax would be:

    position: static;

The elements in normal flow start on a new line even if they don´t take up the full width of the browser window. That forces the rest of elements to appear under them. Even if there is space at the side.

## Relative positioning:
The relative value for the position property allows elements to appear within the normal flow a page, leaving space for an element as intended while not allowing other elements to flow around it; however, it also allows an element’s display position to be modified with the box offset properties.

Relative positioning moves an element in relation to where it would have been in normal flow.

You can indicate that a element should be relatively positioned using the `position` property with a value of `relative`.

You then use the `offset` properties (`top` or `bottom` and `left` or `right`) to indicate how to move the element from where it would have been in normal flow.

To move the box up or down, you can use either the `top` or `bottom` properties. And to move the box horizontally use the `left` or `right` properties.

This does not affect the position of sorrounding elements; they stay in the position they would be in in normal flow.

The values of the box offset properties are given in pixels, ems or percentages.

The rest of boxes are not affected.

## Absolute positioning:

    positon: absolute

This positions the element in relation to its containing element. Those elements move as users scroll into the page.

When the `position` property is given a value of `absolute`, the box is taken out of normal flow and no longer affects the position of other elements on the page. (They act like it is not there).

The box offset properties (`top` or `bottom` and `left` or `right`), specify where the element should appear in relation to its containing element.

With absolutely positioned elements, the box offset properties identify in which direction an element will be moved in relation to its closest relatively positioned parent element.

## Fixed positioning:

    position: fixed;

Is a type of absolute position that requires the `position` property to have a value of fixed.

It positions the element in relation to the browser window. Therefore, when a user scrolls sown the page, it stays in the exact same place.

### Overlaping elements:

When you use `relative`, `fixed`, or `absolute` positioning, boxes can overlap. If boxes overlap, the html code sit on the top of those that are earlier in the page.

If you want to control which element sits on top, you can use the `z-index` property. its value is a number and the higger it is, the closer is the element to the top.

## Positioning with inline-block

In addition to using floats, another way we can position content is by using the display property in conjunction with the inline-block value. The inline-block method, as we’ll discuss, is primarily helpful for laying out pages or for placing elements next to one another within a line.

Recall that the inline-block value for the display property will display elements within a line while allowing them to accept all box model properties, including height, width, padding, border, and margin. Using inline-block elements allows us to take full advantage of the box model without having to worry about clearing any floats.

## Floating elements:

The `float` property allows you to take an element in normal flow an place it as far to the left or right of the containing element as possible. anything else that sits inside the containing element will flow around the element that is floated.
The floated element will float all the way to the side of the element that contains it or the page.

When you use the `float` property you should always use the `width` property to indicate how wide the floated element should be. If you do not, results can be inconsistent but the box is likely to take up the full width of the containing element (just like it do in normal flow).

    `section {
      float: left;
    }

    aside {
      float: right;
    }`

If we want more than two columns, three for example, we have to float those three elements to the right, and give them equal width and margin values.

### Clearing floats:

To prevent content from wrapping around floated elements, we need to clear, or contain, those floats and return the page to its normal flow. We’ll proceed by looking at how to clear floats, and then we’ll take a look at how to contain floats.

`div {
  clear: left;
  clear: right;
  clear: both;
}`

It is important that this clear be applied to an element appearing after the floated elements, not before, to return the page to its normal flow.

### Containing floats:

Rather than clearing floats, another option is to contain the floats. The outcomes of containing floats versus those of clearing them are nearly the same; however, containing floats does help to ensure that all of our styles will be rendered properly.

To contain floats, the floated elements must reside within a parent element. The parent element will act as a container, leaving the flow of the document completely normal outside of it. The CSS for that parent element, represented by the group class below, is shown here:


`.group:before,
.group:after {
  content: "";
  display: table;
}
.group:after {
  clear: both;
}
.group {
  clear: both;
  *zoom: 1;
}
`

There’s quite a bit going on here, but essentially what the CSS is doing is clearing any floated elements within the element with the class of group and returning the flow of the document back to normal.

More specifically, the :before and :after pseudo-elements, as mentioned in the Lesson 4 exercise, are dynamically generated elements above and below the element with the class of group. Those elements do not include any content and are displayed as table-level elements, much like block-level elements. The dynamically generated element after the element with the class of group is clearing the floats within the element with the class of group, much like the clear from before. And lastly, the element with the class of group itself also clears any floats that may appear above it, in case a left or right float may exist. It also includes a little trickery to get older browsers to play nicely.

It is more code than the clear: both; declaration alone, but it can prove to be quite useful.

The technique shown here for containing elements is know as a “clearfix” and can often be found in other websites with the class name of clearfix or cf. We’ve chosen to use the class name of group, though, as it is representing a group of elements, and better expresses the content.

As elements are floated, it is important to keep note of how they affect the flow of a page and to make sure the flow of a page is reset by either clearing or containing the floats as necessary. Failing to keep track of floats can cause quite a few headaches, especially as pages begin to have multiple rows of multiple columns.

### Using float to place elements side by side:

`float` property allows us to place elements side by side.

When elements are floated, the height of the boxes can affect where the following elements sit.

### Clearing floats:

The `clear` property allows you to say that no element (within the same containing element) should touch the left or right-hand sides of a box. It can take the following values:

- `left`: the left-hand side should not touch any other elements appearing on the same containing element.
- `right`: the right-hand side f the box will not touch elements appearing in the same containing element.
- `both`: Neither left or right-hand sides of the box will touch elements appearing in the same containing element.
- `none`: elements can touch either side.

## Parents of floated elements problem and solution:

If a containing element only contains floated elements, some browsers will treat it as it is zero pixels tall.

To solve that, add two css rules to the containing element:
- overflow: auto;
- width: 100%;

Now the containing element is the right size for the elements it contain.

## Creating multicolumn layouts with floats:

To make multicolumn layouts use div elements for each column. Then use one of those three properties to position them next to each other.
- `with`: sets the with of the columns.
- `float`: positions the columns next to each others.
- `margin`: creates a gap between the columns.

# Screen size layout variation.

## Fixed width layout:

Don´t change the size of the page depending on the screen.

To create a fixed with layout, the with of the main boxes will usually be specified in pixels.


## Liquid layout:
The liquid layout uses percentages to specify the width of each box so that the design will stretch to fit the size of the screen.


http://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/
https://codemyviews.com/blog/the-lowdown-on-absolute-vs-relative-positioning
http://www.barelyfitz.com/screencast/html-training/css/positioning/
https://css-tricks.com/centering-css-complete-guide/


# IMAGES

You can control the size of an image using the `width` and `height` properties in css.

Specifying image sizes helps pages to load more smoothly because the HTML and CSS code will often load before the images, and telling the browser how much space to leave for an image allows it to render the rest of the page without waiting for the image to download.

## Aligning images using css:

You can use the `float` property to  align images.

- The float property is added to the class that was created to represent the size of the image.
- New classes are created with names such as align-left or align-right to align the images to the left or right of the page. These class names are used in addition to classes that indicate the size of the image.


## Centering images using css:

By default, images are inline elements. This means that they flow within the sorrounding text.

In order to center an image, it should be turned into a block-level element using the display property with a value of block.

Once it has been made into a block-level element, there are two common ways in which you can horizontally center an image:

- On the containing element you can use `text-align` property with a value of `center`.
- On the image itself, you can use the `margin` property and set the values of the left and right margins to `auto`.

You can specify class elements that allow any element to be centered, in the same way that you can for the dimensions or alignment of images.

The technique for specifying image size an alignment of images can also be used with the HTML5 `<figure>` element.

## Background images:

`background-image` allows you to place an image behind any HTML element. This could be the entire page or just part of the page. By default, a background image will repeat to fill the entire box.

The path to the image follows the letters url, and it is put inside parentheses and quotes.

### Repeating images:

The `background-repeat` property can have four values:
- `repeat`: the background image is repeat both horizontally and vertically.
- `repeat-x`: The image is only repeated horizontally:
- `repeat-y:` the image is repeated only vertically.
- `no-repeat`: The image is only showed once.

The `background-atachment` property specifies whether a background image should stay in one position or move as the user scrolls up and down the page. It can have one of those two values.
- `fixed`
- `scroll`

### Background position:

When an image is not being repeated, you can use the `background-position` property to specify where in the browser window the background image should be placed.

This property usually has a pair of values. The first represents the horizontal position and the second represents the vertical. `(left top)`, `(left center)`, `(left bottom)`, `(center top)`, `(center center)`, `(center bottom)`, `(right top)`, `(right center)`, `(right bottom)`.

If you only specify one value, the second one is default to `center`.

You can also use a pair of pixels or percentages. These represent the distance from the top left corner of the browser windows (or containing box). The top left corner is equal to `0% 0%`.

#### Shorthand:

The `background` property acs like a shorthand for all of the other background properties you have just seen, and also the background-color property.

The properties must be specified in the following order, but you can miss any value if you do not want to specify it.
1- `background-color`
2- `background-image`
3- `background-repeat`
4- `background-attachment`
5- `background-position`

Css 3 will also support the use of multiple background images by repeating the background shorthand.

    div {
      background:
        url(example-1.jpg)
        no-reapeat top left,
        url(example-2.jpg)
        no-repeat bottom left,
        url(example-3.jpg)
        repeat-x center top;
    }

## Image rollovers & sprites:

Using css, its possible to create a link or button that changes to a second style when a user moves their mouse over it. and a thirth style when a user click it.

This is achieved by setting a background image for the link or button that has three different styles of the same button (but only allows enough space to show one of them at a time). When the user moves the mouse over the element, or clicks on it, the position of the background image is moved to show the relevant image.

When a single image is used for several different part of an interface, it is known as a sprite. You can add the logo and other interface elements, as well as buttons to the image.

The advantage of using sprites is that the web browser only needs to request one image rather than many images, which can make the web page load faster.


# Gradients:

Css allow you to specify a gradient as the background of a box. The gradient is created using the `background-image` property.

browse example on google.
