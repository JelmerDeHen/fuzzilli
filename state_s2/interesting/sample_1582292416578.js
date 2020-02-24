function main() {
let v2 = undefined;
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v6(v7,v8,v9,v10) {
    'use strict'
    const v13 = Symbol.e;
    // v13 = .unknown
    const v14 = Symbol[v13];
    // v14 = .unknown
    const v15 = {getPrototypeOf:v14,get:v14};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "get", "getPrototypeOf"])
    const v17 = new Proxy(Reflect,v15);
    // v17 = .unknown
    Object.__proto__ = v17;
}
const v19 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:1337,has:v6};
// v19 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["preventExtensions", "get", "set", "deleteProperty", "call", "getPrototypeOf", "construct", "isExtensible", "ownKeys", "has"])
const v21 = new Proxy(v5,v19);
// v21 = .unknown
v21[1] = "MIN_VALUE";
let v25 = this;
let v26 = v25;
const v29 = new Proxy(v26,Object);
// v29 = .unknown
const v30 = Object.freeze(v29);
// v30 = .undefined
}
%NeverOptimizeFunction(main);
main();
