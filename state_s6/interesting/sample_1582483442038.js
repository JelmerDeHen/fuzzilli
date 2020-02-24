function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v2 = v1;
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v6(v7,v8,v9,v10) {
    'use strict'
    let v12 = 13.37;
    const v13 = {b:v12};
    // v13 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    const v18 = [NaN,13.37,2];
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v19 = v2;
    v18.length = 1337;
    const v21 = {constructor:NaN};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
    const v23 = Object.freeze(v18,2939890574,v21);
    // v23 = .undefined
    const v25 = v18.indexOf(v12,v19,v18,"name",v13);
    // v25 = .integer
}
const v26 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "construct", "get", "call", "setPrototypeOf", "has", "deleteProperty", "isExtensible", "getPrototypeOf", "preventExtensions", "set"])
const v28 = new Proxy(v5,v26);
// v28 = .unknown
v28[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
