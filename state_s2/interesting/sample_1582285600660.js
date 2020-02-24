function main() {
const v3 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        delete v8.length;
    } catch(v9) {
    }
    return v4;
}
const v10 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "preventExtensions", "setPrototypeOf", "get", "deleteProperty", "ownKeys", "getPrototypeOf", "isExtensible", "set", "construct", "call"])
const v12 = new Proxy(v3,v10);
// v12 = .unknown
v12[1] = -256;
let v14 = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
