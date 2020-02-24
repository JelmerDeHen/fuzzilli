function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5,v6,v7) {
    'use strict'
    let v9 = 13.37;
    const v10 = {b:v9};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    const v15 = [NaN,13.37,2];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v16 = 1337;
    v15.length = 1337;
    const v18 = {constructor:NaN};
    // v18 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
    const v20 = Object.freeze(v15,2939890574,v18);
    // v20 = .undefined
    const v22 = v15.indexOf(v9,v16,v15,"name",v10);
    // v22 = .integer
}
const v23 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "has", "setPrototypeOf", "ownKeys", "deleteProperty", "getPrototypeOf", "call", "set", "construct", "isExtensible", "get"])
const v25 = new Proxy(v2,v23);
// v25 = .unknown
v25[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
