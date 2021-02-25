##### Description:

### Count the number of Duplicates

Write a function that will return the count of **distinct case-insensitive** alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

### Example

"abcde" -> 0 `# no characters repeats more than once`
"aabbcde" -> 2 `# 'a' and 'b'`
"aabBcde" -> 2 `# 'a' occurs twice and 'b' twice (`b` and `B`)`
"indivisibility" -> 1 `# 'i' occurs six times`
"Indivisibilities" -> 2 `# 'i' occurs seven times and 's' occurs twice`
"aA11" -> 2 `# 'a' and '1'`
"ABBA" -> 2 `# 'A' and 'B' each occur twice`



我的解法：

```js
function duplicateCount(text){
  //...
  let count = new Array(26).fill(0);
  let str = text.toLowerCase();
  for(let i=0;i<str.length;i++){
    if(count[str.charCodeAt(i)-97]){
      count[str.charCodeAt(i)-97]++;
    }else{
      count[str.charCodeAt(i)-97]=1;
    }
  }
  let max=0;
  for(let i=0;i<count.length;i++){
    if(count[i] > 1){
      max++;
    }
  }
  return max;
}
```

高赞解法：

```js
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
```

```js
//filter 最后一个到第一个出现的字母
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
```