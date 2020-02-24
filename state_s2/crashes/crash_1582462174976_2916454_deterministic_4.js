function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [];
const v6 = {b:v5,d:-128,a:-128,__proto__:-128,c:v2};
const v7 = {toString:13.37,__proto__:v6,e:v4};
const v10 = [13.37,13.37,-4294967296];
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    let v20 = 0;
    try {
        for (const v21 in v18) {
        }
        const v22 = v14(0,v7,v13,v13);
        const v23 = v20 | v6;
        const v24 = {set:v22};
    } catch(v25) {
        const v27 = Uint16Array();
    }
}
const v28 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v10,__proto__:v14,setPrototypeOf:v14,has:v14};
const v30 = new Proxy(v13,v28);
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
