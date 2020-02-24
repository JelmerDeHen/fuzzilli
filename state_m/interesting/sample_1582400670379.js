function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v4(v5,v6,v7,v8) {
    'use strict'
    let v10 = 13.37;
    const v11 = {b:v10};
    // v11 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    v10 = NaN;
    const v16 = [NaN,13.37,2];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v17 = 13.37;
    v16.length = 1337;
    const v19 = {constructor:NaN};
    // v19 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
    const v21 = Object.freeze(v16,2939890574,v19);
    // v21 = .undefined
    const v23 = v16.includes(v10,v17,v16,"name",v11);
    // v23 = .boolean
}
const v24 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "deleteProperty", "ownKeys", "has", "get", "getPrototypeOf", "set", "isExtensible", "call", "preventExtensions", "setPrototypeOf"])
const v26 = new Proxy(v3,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
