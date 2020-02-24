function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v3 = v1;
const v10 = [1337,Uint8ClampedArray];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v11 = [1468489541,13.37,2];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v12 = v10;
v11.length = 6;
const v15 = v11.fill(1337);
// v15 = .undefined
const v16 = [];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v17 = {length:1337,e:1337,c:v16,a:1337,toString:"symbol"};
// v17 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "c", "length", "a", "e"])
function v18(v19,v20,v21,v22) {
    'use strict'
    const v23 = v11.includes(v22,v12,v11,v17,v22);
    // v23 = .boolean
}
const v24 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "call", "preventExtensions", "construct", "get", "has", "setPrototypeOf", "deleteProperty", "isExtensible", "ownKeys", "set"])
const v26 = new Proxy(v17,v24);
// v26 = .unknown
delete v26[v3];
}
%NeverOptimizeFunction(main);
main();
