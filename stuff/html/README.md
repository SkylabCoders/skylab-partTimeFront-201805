# References

[Semantic HTML](https://internetingishard.com/html-and-css/semantic-html/)

[A look into proper HTML5 semantics](https://www.hongkiat.com/blog/html-5-semantics/)

[How to properly use the HTML semantic elements in a blog?](https://stackoverflow.com/questions/44987392/how-to-properly-use-the-html-semantic-elements-in-a-blog)

[HTML5 semantic elements and Webflow: the essential guide](https://webflow.com/blog/html5-semantic-elements-and-webflow-the-essential-guide)

[Anatomía de un blog en HTML5](https://cybmeta.com/anatomia-de-un-blog-en-html5)

[Designing a blog with html5](http://html5doctor.com/designing-a-blog-with-html5/)

[HTML is about meaning](https://marksheet.io/html-semantics.html)


### HTML document structure:

- Document, head, title & body tags:

```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>

<body>
  ...
</body>
</html>
```

- Page information `meta`

```html
<meta charset="UTF-8">
```

[Examples](http://www.htmlandcssbook.com/code-samples/chapter-01/)

### Grouping elements:

- Inline `span`

```html
<span>...</span>
```

- Block `div`

```html
<div>
  ...
</div>
```

### Types of elements:

- Empty Elements
- Inline Elements
- Block Elementsw

[Examples](http://www.htmlandcssbook.com/code-samples/chapter-08/)

### Text tags:

- Headings

```html
<h1>...</h1>
<h2>...</h2>
<h3>...</h3>
<h4>...</h4>
<h5>...</h5>
<h6>...</h6>
```

- Paragraphs

```html
<p></p>
```

- Inside paragraph tags

- Bold `b`, `strong`

```html
<b>...</b>
<strong>...</strong>
```

- Italic `i`, `em`

```html
<i>...</i>
<em>...</em>
```

- Subscript (`sup`) & superscript (`sup`):

```html
<sub>...</sub>
<sup>...</sup>
```

- New line (`br`) & line separator (`hr`)

```html
<br>
<hr>
```

- Quotation `blockquote`:

```html
<blockquote> ... </blockquote>
```

  With `cite` parameter you could add a link to the quote:

```html
<blockquote cite="google.es/hello">
  <p> Hello!</p>
</blockquote>
```

- Abbreviations and acronyms:

```html
<abrr title="Java Script"> JS </abrr>
```

- Citations and definitions:

```html
<cite>...</cite>
<dfn>...</dfn>
```

- Personal details:

```html
<address>
  <p href="mailto: alex@example.com"> </p>
</address>
```

[Examples](http://www.htmlandcssbook.com/code-samples/chapter-02/)

### Lists

- Ordered lists:

```html
<ol>
  <li>...</li>
</ol>
```

- Unordered lists:

```html
<ul>
  <li>...</li>
</ul>
```

- Lists of terms and definitions:

```html
<dl>
  <dt> Term </dt>
  <dd> Definition of the term </dd>

  <dt> Term </dt>
  <dt> Term </dt>
  <dd> Definition of the term </dd>
</dl>
```

[Examples](http://www.htmlandcssbook.com/code-samples/chapter-03/)

### Links

```html
<a href="link_to_url">-Text for the link</a>
```

- eMail

```html
<a href="mailto: maildirection@example.com"> Email Dave</a>
```

- Open links in a new window:

```html
`<a href="link_direction" target = "_blank"> Click to open </a>`
```

- Linking to parts of the same page:

```html
<a href="#top"> Go to top </a>
<a href="url/#id_name">Go to ... in url page </a>
```

[Examples](http://www.htmlandcssbook.com/code-samples/chapter-04/)

### Images:

```html
<img src="the source of the photo" alt = "image description" title = "title for the photo">
```

[Examples](http://www.htmlandcssbook.com/code-samples/chapter-05/)

### Tables:

```html
<table>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>

  <tr>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>

  <tr>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>

</table>
```

- Table heading:

```html
<th>...</th>
<th scope="row">...</th>
<th scope="col">...</th>
```

  - Content of a table:

```html
<thead></thead>
<tbody></tbody>
<tfoot></tfoot>
```

[Example](http://www.htmlandcssbook.com/code-samples/chapter-06/)

# Forms:

```html
<form action="link" method="get">
  <p>This is where form controls will appear.</p>
</form>

<form action="link" method="post">
  <p>This is where form controls will appear.</p>
</form>
```

- Text input:

```html
<form action="http://www.example.com/login.php">
  <p>Username:
    <input type="text" name="username" size="15" maxlength="30" />
  </p>
</form>
```

- Text area:

```html
<form action="http://www.example.com/comments.php">
  <p>What did you think of this gig?</p>
  <textarea name="comments" cols="20" rows="4">Enter your comments...</textarea>
</form>
</body>
```

- Form selections:

- Radio button:

```html
<form action="http://www.example.com/profile.php">
  <p>Please select your favorite genre:
    <br />
    <input type="radio" name="genre" value="rock" checked="checked" /> Rock
    <input type="radio" name="genre" value="pop" /> Pop
    <input type="radio" name="genre" value="jazz" /> Jazz
  </p>
</form>
```

- Checkbox:

```html
<form action="http://www.example.com/profile.php">
 <p>Please select your favorite music service(s):
   <br />
   <input type="checkbox" name="service" value="itunes" checked="checked" /> iTunes
   <input type="checkbox" name="service" value="lastfm" /> Last.fm
   <input type="checkbox" name="service" value="spotify" /> Spotify
 </p>
</form>
```

- Dropdown listbox:

```html
<form action="http://www.example.com/profile.php">
  <p>What device do you listen to music on?</p>
  <select name="devices">
    <option value="ipod">iPod</option>
    <option value="radio">Radio</option>
    <option value="computer">Computer</option>
  </select>
</form>
```

- Multiple selection box:

```html
<form action="http://www.example.com/profile.php">
  <p>Do you play any of the following instruments? (You can select more than one option by holding down control on a PC or command key on a Mac while selecting different options.)</p>
  <select name="instruments" size="3" multiple="multiple">
    <option value="guitar" selected="selected">Guitar</option>
    <option value="drums">Drums</option>
    <option value="keyboard" selected="selected">Keyboard</option>
    <option value="bass">Bass</option>
  </select>
</form>
```

- File input box:

```html
<form action="http://www.example.com/upload.php" method="post">
  <p>Upload your song in MP3 format:</p>
  <input type="file" name="user-song" />
  <br />
  <input type="submit" value="Upload" />
</form>
```

- Submit button:

```html
<form action="http://www.example.com/subscribe.php">
  <p>Subscribe to our email list:</p>
  <input type="text" name="email" />
  <input type="submit" name="subscribe" value="Subscribe" />
</form>
```

- Button:

```html
<form action="http://www.example.com/add.php">
  <button><img src="images/add.gif" alt="add" width="10" height="10" /> Add</button>
  <input type="hidden" name="bookmark" value="lyrics" />
</form>
```

- Image button:

```html
<form action="http://www.example.org/subscribe.php">
  <p>Subscribe to our email list:</p>
  <input type="text" name="email" />
  <input type="image" src="images/subscribe.jpg" width="100" height="20" />
</form>
```

- Labeling form control:

```html
<form action="http://www.example.com/subscribe.php">
  <label>Age:
    <input type="text" name="age" />
  </label>
  <br/> Gender:
  <input id="female" type="radio" name="gender" value="f">
  <label for="female">Female</label>
  <input id="male" type="radio" name="gender" value="m">
  <label for="male">Male</label>
</form>
```

- Grouping form Elements:

```html
<form action="http://www.example.com/subscribe.php">
  <fieldset>
    <legend>Contact details</legend>
    <label>Email:
      <br />
      <input type="text" name="email" />
    </label>
    <br />
    <label>Mobile:
      <br />
      <input type="text" name="mobile" />
    </label>
    <br />
    <label>Telephone:
      <br />
      <input type="text" name="telephone" />
    </label>
  </fieldset>
</form>
```

- Form validation:

```html
<form action="http://www.example.com/login/" method="post">
  <label for="username">Username:</label>
  <input type="text" name="username" id="username" required="required" />
  <br />
  <label for="password">Password:</label>
  <input type="password" name="password" id="password" required="required" />
  <input type="submit" value="Submit" />
</form>
```

- Types of data input:

- Password input:

```html
<form action="http://www.example.com/login.php">
  <p>Username:
    <input type="text" name="username" size="15" maxlength="30" />
  </p>
  <p>Password:
    <input type="password" name="password" size="15" maxlength="30" />
  </p>
</form>
```

- Date input:

```html
<form action="http://www.example.com/bookings/" method="post">
  <label for="username">Departure date:</label>
  <input type="date" name="depart" />
  <input type="submit" value="Submit" />
</form>
```

- email input:

```html
<form action="http://www.example.com/bookings/" method="post">
  <label for="username">Departure date:</label>
  <input type="date" name="depart" />
  <input type="submit" value="Submit" />
</form>
```

- url:

```html
<form action="http://www.example.org/profile.php">
  <p>Please enter your website address:</p>
  <input type="url" name="website" />
  <input type="submit" value="Submit" />
</form>
```
- search:

```html
<form action="http://www.example.org/search.php">
  <p>Search:</p>
  <input type="search" name="search" />
  <input type="submit" value="Search" />
</form>
```

### Iframes:

```html
<iframe>...</iframe>
```

### Figure and figcaption:

```html
<figure>
<img src="/macaque.jpg" alt="Macaque in the trees">
<figcaption>A cheeky macaque, Lower Kintaganban River, Borneo. Original by <a href="http://www.flickr.com/photos/rclark/">Richard Clark</a></figcaption>
</figure>
```

* Differences between `<figure>` and `<aside>`:

  - If the content is simply related and not essential, use `<aside>`.
  - If the content is essential but its position in the flow of content isn’t important, use `<figure>`.

[Examples](http://www.htmlandcssbook.com/code-samples/chapter-07/)

### Video:

```html
<video src="rabbit320.webm" controls>
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.webm">link to the video</a> instead.</p>
</video>
```

Multiple format support:

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
</video>
```

You can use some fewatures of HTML for videos: `with`, `height`, `autoplay`, `loop`, `muted`, `poster`, `preload`

### Audio:

```html
<audio controls>
  <!-- Multiple format support -->
  <source src="viper.mp3" type="audio/mp3">
  <source src="viper.ogg" type="audio/ogg">
</audio>
```

[Examples](http://www.htmlandcssbook.com/code-samples/chapter-09/)

### HTML layout:
- Header

```html
<header>...</header>
```
- Footer

```html
<footer>...</footer>
```

- Section:

```html
<section>...</section>
```

- Article:

```html
<article>...</article>
```

- Aside:

```html
<aside>...</aside>
```

- Navigation:

```html
<nav>...</nav>
```

