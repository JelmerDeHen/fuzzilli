function main() {
const v1 = Symbol.iterator;
// v1 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v2 = v1[v1];
// v2 = .unknown
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v6(v7,v8,v9,v10) {
    'use strict'
    let v12 = 13.37;
    const v14 = [13.37,13.37];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v15 = {b:v14};
    // v15 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    v12 = NaN;
    const v20 = [2,1337];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v21 = [2,13.37,2];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v22 = v20;
    v21.length = 1337;
    const v24 = {get:NaN};
    // v24 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v26 = Object.seal(v21,65537,v24);
    // v26 = .object()
    const v28 = v21.includes(v12,v22,v21,"name",v15);
    // v28 = .boolean
    let v31 = 0;
}
const v34 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "isExtensible", "getPrototypeOf", "deleteProperty", "setPrototypeOf", "get", "has", "construct", "set", "call", "ownKeys"])
const v36 = new Proxy(v5,v34);
// v36 = .unknown
v36[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
