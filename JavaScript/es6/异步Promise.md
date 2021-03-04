##[MDN文档说明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- Promise.all的实现

```js
function promiseAll(promises){
    return new Promise((resolve,reject) => {
        const promiseNum = promises.length;
        let resolvedValues = new Array(promiseNum);
        let resolveCounter = 0;
        for(let i=0;i<promiseNum;i++){
            Promise.resolve(promises[i]).then(value => {
                resolvedValues[i] = value;
                resolveCounter++;
                if(resolveCounter === promiseNum){
                    resolve(resolvedValues);
                },reason => {
                    reject(reason);
                }
            })
        }
    })
}

Promise.all([promise1,promise2,promise3]).then((values) => {
    console.log(values);
})
```

