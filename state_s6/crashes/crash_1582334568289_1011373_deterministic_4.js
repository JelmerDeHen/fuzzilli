function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337];
const v7 = [1337,"symbol",v4];
const v8 = {valueOf:13.37,d:parseInt,toString:v6};
const v9 = {b:3698081956,d:v7,valueOf:v6,constructor:3698081956,__proto__:v7};
let v10 = 1337;
let v13 = "2rv3iRoNoB";
const v15 = [1337,Infinity,Infinity];
const v16 = [v13,v15];
const v18 = v9 + 3698081956;
const v19 = v8.toString;
const v21 = [13.37,13.37];
const v22 = new Int16Array();
const v24 = [1337,1337,1337,1337,1337];
const v27 = [256,256,256,256,256];
function v28(v29,v30,v31,v32) {
    'use strict'
    try {
        v24.__proto__ = v32;
    } catch(v33) {
    }
    const v34 = Infinity >> v32;
}
const v35 = {deleteProperty:v28,set:v28,getPrototypeOf:v28,call:v28,preventExtensions:v28,isExtensible:v28,construct:v28,get:v28,ownKeys:v28,setPrototypeOf:v28,has:v28};
const v37 = new Proxy(v27,v35);
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
