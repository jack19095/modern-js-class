## [Webpack](https://webpack.github.io/)
Webpack 是一個前端資源打包的工具，可以解決套件相依性，資源內容複雜，程式碼前置編譯等等。

* 安裝 webpack
```
npm install -g webpack
```

* 安裝 babel-loader
```
npm install babel-loader --save-dev
```
因為使用 React 會需要撰寫 .jsx 的檔案，所以需要 babel 來幫助我們做前置的編譯

---

#### 設定 webpack.config.js 檔案

```javascript
var path = require('path');
module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [ { test: /\.js|jsx$/, loaders: ['babel'] } ]
  }
}
```
```
app.js 是前端程式碼的進入點，並會使用到其他的套件，如自己寫的套件或是
透過 `npm install` 安裝的套件。會被編譯出一個叫做 `bundle.js` 的檔案
，之後再透過某 html 檔案載入這個 .js 檔案即可。
```