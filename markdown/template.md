## 使用 EJS 
#### [EJS](http://ejs.co/) 是個簡易的 HTML 範本語言

```
$ npm install ejs --save
```

```javascript
var ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});
```

---

```html
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```

```html
<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>
</ul>
```

---

#### [在 Express 使用範本引擎](https://expressjs.com/en/guide/using-template-engines.html)

```javascript
app.set('view engine', 'ejs')

app.get('/home', function (req, res) {
  res.render('home', {text: 'hello world'});
})
```
