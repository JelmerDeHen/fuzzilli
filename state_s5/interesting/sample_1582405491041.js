function main() {
function v1(v2,v3,v4,v5) {
    'use strict'
    let v7 = 13.37;
    const v8 = {b:v7};
    // v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    v7 = NaN;
    const v13 = [NaN,v1,2];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v14 = Uint8ClampedArray;
    v13.length = 1337;
    const v16 = v13.indexOf(v7,v14,v13,"name",v8);
    // v16 = .integer
}
const v17 = {deleteProperty:v1,set:v1,getPrototypeOf:v1,call:v1,preventExtensions:v1,isExtensible:v1,construct:v1,get:v1,ownKeys:v1,setPrototypeOf:v1,has:v1};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "setPrototypeOf", "deleteProperty", "isExtensible", "getPrototypeOf", "construct", "ownKeys", "has", "get", "preventExtensions", "set"])
const v19 = new Proxy(Proxy,v17);
// v19 = .unknown
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
