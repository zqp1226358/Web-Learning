var partition = function (s) {
  //res保存最终结果,temp表示每一个路径分支产生的结果
  var res = [], temp = [];
  var start = 0; //start表示从s的哪一位开始，这里从s的第0位开始

  // 递归函数
  partitionStr(s, start, temp, res);
  return res;
};

function partitionStr(s, start, temp, res) {
  if (start === s.length) { //递归终止条件
    res.push([...temp]);//不能直接将temp数组push，那样push的是temp的引用
    return;
  }


  for (var i = start; i < s.length; i++) {
    //rest是s的前i个字符（也就是取走的字符，在aab图中是第一行的a,aa,aab等）
    var rest = s.substring(start, i + 1);
    temp.push(rest);
    //保存了前i个字符(rest)就继续从第i+1开始分割
    partitionStr(s, i + 1, temp, res);
    temp.pop();
  }
}

作者：autunmnleo
链接：https://leetcode-cn.com/problems/palindrome-partitioning/solution/javascript-di-gui-hui-su-by-autunmnleo/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。