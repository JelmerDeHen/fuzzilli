function main() {
const v1 = "symbol".__proto__;
// v1 = .object()
const v5 = [...v1,6,..."symbol",1];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = v5[0];
// v6 = .unknown
const v12 = [1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v13 = [1468489541,13.37,2];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v14 = v12;
v13.length = 6;
const v17 = [];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v19 = {get:Uint8ClampedArray};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v21 = Object.seal(v13,65537,v19);
// v21 = .object()
const v22 = {length:1337,e:1337,c:v17,a:1337,toString:"symbol"};
// v22 = .object(ofGroup: Object, withProperties: ["length", "e", "toString", "a", "__proto__", "c"])
function v24(v25,v26,v27,v28) {
    'use strict'
    const v30 = v13.includes(1337,v14,v13,"name",v28);
    // v30 = .boolean
}
const v34 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "deleteProperty", "preventExtensions", "get", "set", "ownKeys", "isExtensible", "getPrototypeOf", "setPrototypeOf", "has", "call"])
const v36 = new Proxy(v22,v34);
// v36 = .unknown
v36[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
