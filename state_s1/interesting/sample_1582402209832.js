function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v4(v5,v6,v7,v8) {
    'use strict'
    let v10 = 13.37;
    const v11 = {b:v10};
    // v11 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    v10 = NaN;
    const v17 = [v0,13.37,2];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v18 = Uint8ClampedArray;
    v17.length = 1337;
    const v20 = {constructor:NaN};
    // v20 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
    const v22 = Object.freeze(v17,2939890574,v20);
    // v22 = .undefined
    const v24 = v17.includes(v10,v18,v17,"name",v11);
    // v24 = .boolean
}
const v25 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "get", "construct", "call", "deleteProperty", "setPrototypeOf", "isExtensible", "ownKeys", "has", "getPrototypeOf"])
const v27 = new Proxy(v3,v25);
// v27 = .unknown
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
