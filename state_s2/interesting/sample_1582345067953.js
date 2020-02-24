function main() {
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [1468489541,13.37,2];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v8 = v6;
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v13 = {get:Uint8ClampedArray};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v15 = Object.seal(v7,65537,v13);
// v15 = .object()
const v16 = {length:1337,e:1337,c:v11,a:1337,toString:"symbol"};
// v16 = .object(ofGroup: Object, withProperties: ["c", "toString", "length", "a", "__proto__", "e"])
function v18(v19,v20,v21,v22) {
    'use strict'
    const v24 = v7.includes(1337,v8,v7,"name",v22);
    // v24 = .boolean
}
const v25 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "isExtensible", "getPrototypeOf", "deleteProperty", "ownKeys", "construct", "set", "has", "call", "get", "preventExtensions"])
const v27 = new Proxy(v16,v25);
// v27 = .unknown
v27[1] = "MIN_VALUE";
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
v30 = v31;
}
%NeverOptimizeFunction(main);
main();
