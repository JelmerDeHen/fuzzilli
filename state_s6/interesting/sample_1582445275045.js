function main() {
function v2(v3,v4,v5,v6) {
    'use strict'
    let v8 = 13.37;
    const v9 = {b:v8};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    const v14 = [NaN,13.37,2];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v15 = 1337;
    v14.length = 1337;
    const v17 = v14.indexOf(v8,v15,v14,"name",v9);
    // v17 = .integer
}
const v18 = {deleteProperty:v2,set:v2,getPrototypeOf:v2,call:v2,preventExtensions:v2,isExtensible:v2,construct:v2,get:v2,ownKeys:v2,setPrototypeOf:v2,has:v2};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "deleteProperty", "has", "setPrototypeOf", "ownKeys", "getPrototypeOf", "set", "get", "construct", "preventExtensions", "call"])
const v20 = new Proxy(Proxy,v18);
// v20 = .unknown
v20[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
