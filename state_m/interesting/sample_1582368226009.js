function main() {
const v7 = [1337,Uint8ClampedArray];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = [1468489541,13.37,2];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v9 = v7;
v8.length = 6;
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v13 = {get:Uint8ClampedArray};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v15 = Object.seal(v8,1337,v13);
// v15 = .object()
const v16 = {length:1337,e:1337,c:v12,a:1337,toString:"symbol"};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "length", "a", "toString", "c"])
function v18(v19,v20,v21,v22) {
    'use strict'
    const v24 = v8.includes(v22,v9,v8,"name",v22);
    // v24 = .boolean
}
const v25 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "ownKeys", "isExtensible", "deleteProperty", "setPrototypeOf", "has", "getPrototypeOf", "call", "set", "construct", "preventExtensions"])
const v27 = new Proxy(v16,v25);
// v27 = .unknown
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
