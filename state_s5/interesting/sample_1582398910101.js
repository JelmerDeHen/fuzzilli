function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v4(v5,v6,v7,v8) {
    'use strict'
    let v10 = 13.37;
    const v11 = {b:v10};
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    v10 = NaN;
    const v16 = [NaN,13.37,2];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v17 = 13.37;
    v16.length = 1337;
    const v19 = {get:NaN};
    // v19 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v21 = Object.seal(v16,65537,v19);
    // v21 = .object()
    const v23 = v16.includes(v10,v17,v16,"name",v11);
    // v23 = .boolean
}
const v24 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "ownKeys", "has", "call", "get", "deleteProperty", "setPrototypeOf", "isExtensible", "preventExtensions", "set", "construct"])
const v26 = new Proxy(v3,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
