function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v3(v4,v5,v6,v7) {
    'use strict'
    let v9 = 13.37;
    const v10 = {b:v9};
    // v10 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    v9 = NaN;
    const v16 = [NaN,13.37,2];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v17 = Uint8ClampedArray;
    v16.length = 1337;
    const v19 = {constructor:NaN};
    // v19 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
    const v21 = Object.freeze(v16,2939890574,v19);
    // v21 = .undefined
    const v23 = v16.includes(v9,v17,v16,"name",v10);
    // v23 = .boolean
}
const v24 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "ownKeys", "get", "isExtensible", "has", "preventExtensions", "setPrototypeOf", "construct", "deleteProperty", "getPrototypeOf", "set"])
const v26 = new Proxy(v2,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
