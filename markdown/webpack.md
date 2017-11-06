## [Webpack](https://webpack.github.io/)
Webpack 是一個前端資源打包的工具，可以解決套件相依性，資源內容複雜，程式碼前置編譯等等。

## [babel](http://babeljs.io/)
Babeljs 是一個 Javascsript 的編譯器，可以解決相容性的問題，或使用一歇延展的特性。

因為使用 React 會需要撰寫 .jsx 的檔案，所以需要 babel 來幫助我們做前置的編譯

---

```
npm install --save-dev babel-loader babel-core babel-preset-env webpack
```
```
npm install --save-dev babel-cli babel-preset-react
```

---


#### 設定 webpack.config.js 檔案

```javascript
module.exports = {
  entry: './client.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static/build')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader'
      }
    ]
  },
};
```
```
client.jsx 是整個前端程式碼的進入點，並會使用到其他的套件，如自己寫的套件或是
透過 `npm install` 安裝的套件。執行完 webpack 後會被編譯出一個叫做 `bundle.js` 的檔案
，之後再透過某 html 檔案載入 bundle.js。
```

---

#### 設定 .babelrc 檔案

```javascript
{
    "presets": [
        "react", "env"
    ]
}
```

---

#### 實作 client.jsx

```
$ npm install axios --save
```

```javascript
const axios = require('axios');

const getApiUrl = () => {
  return `${window.location.protocol}//${window.location.host}`;
}

const getHistory = async () => {
  let url = getApiUrl() + '/api/history/';
  let result = await axios.get(url);
  console.log(result)
}

getHistory();
```

---

#### 執行 webpack

```bash
# Linux/Mac
node ./node_modules/webpack/bin/webpack.js
```

```bash
# Windows
node .\node_modules\webpack\bin\webpack.js
```

```bash
# 如果是透過 npm install -g webpack
webpack
```
