function main() {
const v3 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        delete v8.length;
    } catch(v9) {
    }
    return v4;
}
const v10 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "set", "call", "getPrototypeOf", "deleteProperty", "has", "isExtensible", "ownKeys", "setPrototypeOf", "get", "construct"])
const v12 = new Proxy(v3,v10);
// v12 = .unknown
v12[1] = -256;
let v14 = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
