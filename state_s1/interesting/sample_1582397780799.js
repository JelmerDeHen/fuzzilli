function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v3 = v1;
const v11 = [1337,Uint8ClampedArray];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v12 = [1468489541,13.37,2];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v13 = v11;
v12.length = 6;
const v17 = [1337,1337,1337,1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v18 = v12.fill(1337);
// v18 = .undefined
const v19 = [];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v20 = {get:Uint8ClampedArray};
// v20 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v22 = Object.seal(v12,1337,v20);
// v22 = .object()
const v23 = {length:1337,e:1337,c:v19,a:1337,toString:"symbol"};
// v23 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "e", "a", "toString", "length"])
function v24(v25,v26,v27,v28) {
    'use strict'
    const v29 = v12.includes(v28,v13,v12,v17,v28);
    // v29 = .boolean
}
const v30 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "getPrototypeOf", "construct", "preventExtensions", "setPrototypeOf", "isExtensible", "deleteProperty", "get", "ownKeys", "call", "set"])
const v32 = new Proxy(v23,v30);
// v32 = .unknown
delete v32[v3];
}
%NeverOptimizeFunction(main);
main();
