function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {__proto__:16,d:v8};
// v9 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
let v10 = v8;
const v13 = new Float64Array(6992);
// v13 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
let v15 = DataView;
let v16 = v13;
const v21 = [1337,1337,1337,1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v22(v23,v24,v25,v26) {
    'use strict'
    const v29 = Symbol.byteLength;
    // v29 = .unknown
    const v30 = Symbol[v29];
    // v30 = .unknown
    const v31 = {__proto__:v30,get:v30};
    // v31 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v33 = new Proxy(Reflect,v31);
    // v33 = .unknown
    Object.__proto__ = v33;
    return v7;
}
const v35 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:1337,has:v15};
// v35 = .object(ofGroup: Object, withProperties: ["has", "setPrototypeOf", "__proto__"], withMethods: ["isExtensible", "preventExtensions", "getPrototypeOf", "ownKeys", "call", "construct", "deleteProperty", "set", "get"])
const v37 = new Proxy(v21,v35);
// v37 = .unknown
v37[3719484904] = "MIN_VALUE";
const v38 = new Proxy(v16,Object);
// v38 = .unknown
for (const v39 in v38) {
}
}
%NeverOptimizeFunction(main);
main();
