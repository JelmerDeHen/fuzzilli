function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v2 = {b:v1};
// v2 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = [Uint8ClampedArray,13.37,2];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v9 = v7;
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v14 = {get:Uint8ClampedArray};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v16 = Object.seal(v8,65537,v14);
// v16 = .object()
const v17 = {length:1337,e:1337,c:v12,a:1337,toString:"symbol"};
// v17 = .object(ofGroup: Object, withProperties: ["a", "toString", "__proto__", "c", "length", "e"])
function v19(v20,v21,v22,v23) {
    'use strict'
    const v25 = v8.includes(1337,v9,v8,"name",v23);
    // v25 = .boolean
}
const v26 = {deleteProperty:v2,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__", "deleteProperty"], withMethods: ["preventExtensions", "get", "construct", "getPrototypeOf", "isExtensible", "has", "ownKeys", "setPrototypeOf", "set", "call"])
const v28 = new Proxy(v17,v26);
// v28 = .unknown
v28[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
