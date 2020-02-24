function main() {
const v2 = [3,3,3,3,3];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v3(v4,v5,v6,v7) {
    'use strict'
    let v9 = 13.37;
    const v10 = {b:v9};
    // v10 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    v9 = NaN;
    const v16 = [NaN,13.37,2];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v17 = Uint8ClampedArray;
    v16.length = 1337;
    const v19 = {constructor:NaN};
    // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
    const v21 = Object.seal(v16,2939890574,v19);
    // v21 = .object()
    const v23 = v16.indexOf(v9,v17,v16,"name",v10);
    // v23 = .integer
}
const v24 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,d:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "has", "preventExtensions", "get", "d", "set", "call", "deleteProperty", "ownKeys", "construct", "getPrototypeOf"])
const v26 = new Proxy(v2,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
