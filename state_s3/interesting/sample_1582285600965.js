function main() {
const v3 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        delete v8.length;
    } catch(v9) {
    }
    return v4;
}
const v10 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "preventExtensions", "get", "isExtensible", "setPrototypeOf", "call", "getPrototypeOf", "ownKeys", "has", "construct", "set"])
const v12 = new Proxy(v3,v10);
// v12 = .unknown
v12[1] = -256;
let v14 = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
