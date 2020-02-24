function main() {
const v5 = [-3962557577,-3962557577];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1468489541,-1000000.0,2];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v7 = v5;
const v10 = [];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = {get:Uint8ClampedArray};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v14 = Object.seal(v6,65537,v12);
// v14 = .object()
const v15 = {a:1337,e:1337,c:v10,a:1337,toString:"symbol"};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "c", "a", "toString"])
function v17(v18,v19,v20,v21) {
    'use strict'
    const v23 = v6.includes(-3962557577,v7,v6,"name",v21);
    // v23 = .boolean
}
const v24 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "construct", "deleteProperty", "isExtensible", "getPrototypeOf", "call", "setPrototypeOf", "preventExtensions", "set", "has", "get"])
const v26 = new Proxy(v15,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
