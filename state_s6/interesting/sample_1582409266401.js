function main() {
function v2(v3,v4,v5,v6) {
    'use strict'
    let v8 = 13.37;
    const v9 = {b:v8};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    v8 = NaN;
    const v15 = ["species",13.37,2];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v16 = Uint8ClampedArray;
    v15.length = 1337;
    const v18 = v15.indexOf(v8,v16,v15,"name",v9);
    // v18 = .integer
}
const v19 = {deleteProperty:v2,set:v2,getPrototypeOf:v2,call:v2,preventExtensions:v2,isExtensible:v2,construct:v2,get:v2,ownKeys:v2,setPrototypeOf:v2,has:v2};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "has", "set", "deleteProperty", "isExtensible", "construct", "getPrototypeOf", "preventExtensions", "get", "call", "setPrototypeOf"])
const v21 = new Proxy(Proxy,v19);
// v21 = .unknown
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
