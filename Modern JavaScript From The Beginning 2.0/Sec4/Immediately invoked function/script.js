
//Scope polution, 其他人在otherscript定义的变量和这里定义的变量其冲突 I I F E的目的是使刚定义的变量在中立刻执行


// const user = 'Brad';


(function() {
    const user = 'Brad';
    console.log(user);
})();


(function(name) {
    console.log("Hello " + name);
})('John');