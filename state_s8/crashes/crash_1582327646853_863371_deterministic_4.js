function main() {
let v2 = 0;
const v3 = Array.isArray();
const v5 = [1337];
const v8 = [1337,1337,1337,1337,1337];
function v9(v10,v11,v12,v13) {
    'use strict'
    for (const v14 of v8) {
    }
    for (const v15 of v5) {
        v13.toString = v12;
    }
}
const v16 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v18 = new Proxy(v8,v16);
v18[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
