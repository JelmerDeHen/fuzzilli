function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [13.37,1337,65537];
const v7 = {d:v3,__proto__:1337,c:65537,b:1337,valueOf:1337};
const v8 = {d:13.37,length:65537,__proto__:1337,constructor:Int8Array,b:1337,e:13.37};
let v9 = v8;
let v11 = "2rv3iRoNoB";
const v13 = [1337,1337,1337,1337,1337];
let v14 = v13;
const v17 = [256,256,256,256,256];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v13.__proto__ = v22;
    } catch(v23) {
    }
    const v25 = v21 % 1337;
}
const v26 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v28 = new Proxy(v17,v26);
v28[1] = "MIN_VALUE";
const v30 = new Int32Array(v14);
}
%NeverOptimizeFunction(main);
main();
