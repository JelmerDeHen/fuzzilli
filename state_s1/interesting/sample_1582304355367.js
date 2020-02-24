function main() {
let v1 = 1337;
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v12 = Object.seal(v10);
        // v12 = .object()
    } catch(v13) {
    }
}
const v14 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v1,isExtensible:8,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions", "isExtensible"], withMethods: ["getPrototypeOf", "get", "has", "deleteProperty", "ownKeys", "construct", "call", "set", "setPrototypeOf"])
const v16 = new Proxy(v5,v14);
// v16 = .unknown
v16[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
