## [React](https://facebook.github.io/react/)

* React 的核心概念是封裝組件（component），組件有自己的狀態（state）、生命週期、參數，狀態改變時會在重新渲染（render）整個頁面。

* 不再透過直接查找 DOM 的方式來做動態修改


---

## 組件（component）

```javascript
const React = require('react');
const ReactDOM = require('react-dom');

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

// 將 hello 元件載入 root element 裡頭
ReactDOM.render(
  <Hello name="ggm" />,
  document.getElementById('root')
)
```

---

## JSX
React 發明一種新的語法就做 JSX，就是把 HTML 嵌入 Javascript 的程式碼中，有助於達到封裝的效果。React 並非一定要使用 JSX 語法，也可以使用純 Javscript 的語法。若使用 JSX 語法則必須要先做前置的編譯。

```javascript
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

---

## Virtual DOM
當組件（component）的狀態（state）有受到改變的時候，react 可以馬上做出反應，更新整個頁面。而這樣的做法可能會造成效能問題，於是有了 Virtual DOM 的概念。react 會自動找尋需要變更的節點（node）去做局部渲染（render），這樣的效能會提升許多。

---

## 實作
 * 請至這個[連結](https://github.com/ntu-csie-train/place-spot/tree/starter)下載專案
 * 按下右邊有一個 `download` 的按鈕