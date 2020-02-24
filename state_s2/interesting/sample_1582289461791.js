function main() {
let v1 = Promise;
let v2 = v1;
const v5 = new Proxy(v2,Object);
// v5 = .unknown
const v6 = Object.freeze(v5);
// v6 = .undefined
const v8 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v9(v10,v11,v12,v13) {
    'use strict'
}
const v14 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "call", "isExtensible", "setPrototypeOf", "construct", "preventExtensions", "set", "ownKeys", "get", "deleteProperty", "getPrototypeOf"])
const v16 = new Proxy(v8,v14);
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
