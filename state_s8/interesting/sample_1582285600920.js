function main() {
const v3 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        delete v8.length;
    } catch(v9) {
    }
    return v4;
}
const v10 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "setPrototypeOf", "set", "construct", "preventExtensions", "call", "get", "getPrototypeOf", "isExtensible", "deleteProperty", "has"])
const v12 = new Proxy(v3,v10);
// v12 = .unknown
v12[1] = -256;
let v14 = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
