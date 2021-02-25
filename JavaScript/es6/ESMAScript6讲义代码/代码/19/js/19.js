// let p = new Promise((resolve, reject) => {
//     //一顿异步操作之后
//     if (false) {
//         //console.log('异步成功！');
//         resolve('异步成功！');
//     } else {
//         //console.log(('异步失败！'));
//         reject('异步失败！');
//     }
// });
//
// p.then((value) => {
//     console.log(value);
// }, (reason) => {
//     console.log(reason);
// });



// p.then((value) => {
//     console.log(value);
// }).catch((reason) => {
//     console.log((reason));
// });


let p1 = new Promise((resolve, reject) => {
    //模拟异步1
    setTimeout(() => {
        console.log('异步1');
        resolve('1.异步');
    }, 3500);
});

let p2 = new Promise((resolve, reject) => {
    //模拟异步2
    setTimeout(() => {
        console.log('异步2');
        resolve('22.异步');
    }, 800);
});

let p3 = new Promise((resolve, reject) => {
    //模拟异步3
    setTimeout(() => {
        console.log('异步3');
        resolve('3.异步');
    }, 1500);
});


p1.then(value => {
    console.log(value);
    return p2;
}).then(value => {
    console.log(value);
    return p3;
}).then(value => {
    console.log(value);
});





















