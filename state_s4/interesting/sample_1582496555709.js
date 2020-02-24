function main() {
const v1 = {a:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
function v3(v4,v5,v6,v7) {
    'use strict'
    let v11 = -1024;
    while (v11 < 5) {
        const v13 = Object.defineProperty(v1,v11,Uint8ClampedArray);
        // v13 = .undefined
        const v14 = v11 + 1;
        // v14 = .primitive
        v11 = v14;
    }
}
const v15 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get", "setPrototypeOf", "ownKeys", "preventExtensions", "deleteProperty", "getPrototypeOf", "has", "isExtensible", "construct", "call"])
const v17 = new Proxy(Proxy,v15);
// v17 = .unknown
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
