function main() {
const v2 = [13.37];
const v4 = {toString:1337,a:"NKu3Sm*k5e",b:"NKu3Sm*k5e",c:v2,length:1337};
const v8 = [1337,1337,1337,1337,1337];
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        const v14 = v9();
        const v15 = v9();
        "NKu3Sm*k5e".__proto__ = v4;
        const v17 = Object.freeze();
        const v21 = {get:Number,set:Number};
        const v23 = Object.defineProperty(this,1337,v21);
    } catch(v24) {
    }
}
const v25 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v27 = new Proxy(v8,v25);
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
