## [字串](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
#### 字元的序列，字元的陣列

```javascript
let s1 = 'hello world'
let s2 = "hello world"
let s3 = `hello world`

console.log(s1, s2, s3);
```

---


#### Template literals
#### 可以在字串裡面埋入 statement

```javascript
let name = '小明'
let welcome = `你好，我的名字叫做 ${name}`
console.log(welcome)
```

---


#### 字串的操作

```javascript
let hello = 'hello world';
console.log(hello)
console.log(hello[0], hello[1])

hello[1] = 'a'
console.log(hello)
```

---


#### 字串的 method
#### .substr()

```javascript
let welcome = 'hello world';

console.log('(1, 2): '   + welcome.substr(1, 2));
console.log('(-3, 2): '  + welcome.substr(-3, 2));
console.log('(-3): '     + welcome.substr(-3));
console.log('(1): '      + welcome.substr(1));
console.log('(-20, 2): ' + welcome.substr(-20, 2));
console.log('(20, 2): '  + welcome.substr(20, 2));
```

---


#### 字串的 method
#### .replace()

```javascript
let welcome = 'hello world'
let newWelcome = welcome.replace('hello', 'hi')

console.log(welcome, newWelcome);
```

---

#### 小測驗

```javascript
let words1 = ['The', 'fox', 'jumps', 'over', 'dog']
let words2 = ['quick', 'brown']
let word1 = 'the'
let word2 = 'lazy'

// 不用其他變數或宣告字串
// 印出 The quick brown fox jumps over the lazy dog

```
