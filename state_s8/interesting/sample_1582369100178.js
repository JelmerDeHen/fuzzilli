function main() {
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [1468489541,-1000000.0,2];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v8 = v6;
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
v7[8] = 1337;
const v13 = {get:Uint8ClampedArray};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v15 = Object.seal(v7,65537,v13);
// v15 = .object()
const v16 = {a:1337,e:1337,c:v11,a:1337,toString:"symbol"};
// v16 = .object(ofGroup: Object, withProperties: ["a", "e", "toString", "__proto__", "c"])
function v18(v19,v20,v21,v22) {
    'use strict'
    const v24 = v7.includes(1337,v8,v7,"name",v22);
    // v24 = .boolean
}
const v25 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "deleteProperty", "ownKeys", "isExtensible", "set", "call", "setPrototypeOf", "getPrototypeOf", "construct", "get", "preventExtensions"])
const v27 = new Proxy(v16,v25);
// v27 = .unknown
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
