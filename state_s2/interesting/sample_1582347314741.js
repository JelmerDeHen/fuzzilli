function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v2 = {b:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v7 = [2,2];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = [Uint8ClampedArray,13.37,2];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v9 = v7;
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = {get:Uint8ClampedArray};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v16 = Object.seal(v8,65537,v14);
// v16 = .object()
const v17 = {length:1337,e:1337,c:v12,a:1337,toString:"symbol"};
// v17 = .object(ofGroup: Object, withProperties: ["length", "a", "c", "e", "__proto__", "toString"])
function v19(v20,v21,v22,v23) {
    'use strict'
    const v25 = v8.includes(2,v9,v8,"name",v23);
    // v25 = .boolean
}
const v26 = {deleteProperty:v2,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__", "deleteProperty"], withMethods: ["has", "call", "set", "get", "isExtensible", "getPrototypeOf", "construct", "setPrototypeOf", "ownKeys", "preventExtensions"])
const v28 = new Proxy(v17,v26);
// v28 = .unknown
v28[1] = "MIN_VALUE";
let v31 = 0;
}
%NeverOptimizeFunction(main);
main();
