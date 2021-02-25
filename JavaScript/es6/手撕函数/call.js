function call(fn,obj,...args){
    //判断(查看call()官方文档，对于null/undefined会转化全局对象)
    if(obj === undefined || obj === null){
        obj = globalThis;
    }
    //为obj添加临时的方法
    obj.temp = fn;
    //调用temp方法
    let result = obj.temp(...args);
    //删除 temp 方法
    delete obj.temp;
    //返回执行结果
    return result;
}

function apply(fn,obj,args){
    //判断(查看call()官方文档，对于null/undefined会转化全局对象)
    if(obj === undefined || obj === null){
        obj = globalThis;
    }
    //为obj添加临时的方法
    obj.temp = fn;
    //调用temp方法
    let result = obj.temp(...args);
    //删除 temp 方法
    delete obj.temp;
    //返回执行结果
    return result;
}

//bind()函数会返回一个新函数
function bind(fn,obj,...args){
    return function(...args2){
        //执行call函数
        return call(fn,obj,...args,...args2);
    }
}
