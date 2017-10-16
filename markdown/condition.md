## if/else 判斷式
### 從此以後，你可以扮演甘道夫

```javascript
let score = 60;
if (score >= 60) {
  console.log('pass');
} else {
  console.log('not pass');
}
```

---

### 那如果要給級距怎辦？

```javascript
// 90~100 -> A, 80~89 -> B , 70~79 -> C, 60~69 -> D, X
let score = 60;
if (score >= 60) {
  // ...
} else {
  console.log('X');
}
```

---

### 那如果要給級距怎辦？
### 用很多層 if 

```javascript
// 90~100 -> A, 80~89 -> B , 70~79 -> C, 60~69 -> D, X
let score = 60;
if (score >= 60) {
  if (score >= 70) {
    if (score >= 80) {
    } else {
      console.log('C');    
    }
  } else {
    console.log('D');  
  }
} else {
  console.log('X');
}
```

---

### 那如果要給級距怎辦？
### 也可以不用很多層 if 

```javascript
// 90~100 -> A, 80~89 -> B , 70~79 -> C, 60~69 -> D, X
let score = 60;
if (score >= 90) {
  console.log('A');
} 
if (score >= 80 && score<=90) {
  console.log('B');
}
if (score >= 70 && score<=80) {
  console.log('C');
}
// 以此類推
```

---

### 那如果要給級距怎辦？
### 使用 else if

```javascript
// 90~100 -> A, 80~89 -> B , 70~79 -> C, 60~69 -> D, X
let score = 60;
if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
}
// 以此類推
```

---

### 使用 else if
### 另外一個例子

```javascript
// 90~100 -> A, 80~89 -> B , 70~79 -> C, 60~69 -> D, X
let item = 'A';
if (item === 'A') {
  console.log('薯條 + 冰紅茶');
} else if (item === 'B') {
  console.log('沙拉 + 冰紅茶');
} else if (item === 'C') {
  console.log('雞塊 + 冰紅茶');
}
// 以此類推
```


