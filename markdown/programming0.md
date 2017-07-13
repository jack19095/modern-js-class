
### 程式是嚴謹的
### 寫錯一個字，就會沒辦法執行

---

``` javascript
  console.log('hello world'); // 這樣可以執行
```

``` javascript
  console.logg('hello world'); // 這樣就不能執行了
```

---

### 程式是逐行執行的（目前是這樣）
### 執行完這一行才會執行下一行

``` javascript
  let number1 = 10;
  let number2 = 20;
  let sum = number1 + number2;
  console.log(sum);
```


---


### 如果中途發生錯誤，就不會再執行下去

``` javascript
  let number1 = 10;
  lat number2 = 20;  // 壞了
  let sum = number1 + number2;
```
