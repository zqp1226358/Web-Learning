#### Exes and Ohs

##### Description:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```



我的解法:

```js
function XO(str) {
    //code here
    let map={x:0,o:0};
    let str2=str.toLowerCase();
    for(let i=0;i<str2.length;i++){
      if(str2[i]==='x'){
        map['x']++;
      }else if(str2[i] === 'o'){
        map['o']++;
      }
    }
   if(map['x']===0&&map['o']===0){
      return true;
    }
    if(map['x']===0||map['o']===0){
      return false;
    }else if(map['x']===map['o']){
      return true;
    }
    return false;
}
```



高赞解法：

1. 利用match匹配  g全局匹配  i不区分字母大小写

```js
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
```

2. 利用filter

```js
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
```

3. 利用replace

```js
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}
```



