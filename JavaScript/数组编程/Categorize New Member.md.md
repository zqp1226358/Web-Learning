## Categorize New Member 新会员分类

**题目描述：**
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
俱乐部有两类会员：高级会员和公开会员。他们希望你能提供申请表格的帮助，告诉潜在会员他们将会被分在哪个类别。
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
要成为高级会员，必须年龄至少为55岁，并且有一个大于7的差点。俱乐部中，玩家差点从-2到+26，玩家越好，差点越低。

**Input**
**输入**
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person’s age and an integer for the person’s handicap.

Note for F#: The input will be of (int list list) which is a List
输入将包含一个列表，每个列表中含有两个项目，每个列表中的信息对应一个潜在会员，信息包括人的年龄整数和人的差点整数。

**Example Input**
**样例输入**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200616083306580.png)

**Output**
**输出**
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
输出将包含一个字符串值列表，说明对应的成员将被分到高级或公开会员类别中。

**Example Output**
**样例输出**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200616083320341.png)



我的解决方法：

```js
function openOrSenior(data){
  // ...
  let res=[];
  for(let i=0;i<data.length;i++){
    if(data[i][0]>=55 && data[i][1]>7){
      res.push('Senior');
    }else{
      res.push("Open");
    }
  }
  return res
}
```



高赞解决：

1. 利用map

```js
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

//这里age handicap相当于解构
```

2. 使用foreach

```js
function openOrSenior(data){
  var result = [];
  data.forEach(function(member) {
    if(member[0] >= 55 && member[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  })
  return result;
}
```

