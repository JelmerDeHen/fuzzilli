function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    let v10 = 0;
    while (v10 < 1337) {
        const v11 = v10 + 1;
        v10 = v11;
    }
    try {
        const v12 = typeof 0;
        const v13 = v3();
    } catch(v14) {
        const v15 = v14.__proto__;
    }
}
const v16 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v18 = new Proxy(v2,v16);
v18[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
