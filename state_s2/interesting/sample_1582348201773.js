function main() {
const v5 = [-3962557577,-3962557577];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1468489541,-1000000.0,2];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v7 = v5;
const v10 = [];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v12 = {get:Uint8ClampedArray};
// v12 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v14 = Object.seal(v6,65537,v12);
// v14 = .object()
const v15 = {a:1337,e:1337,c:v10,a:1337,toString:"symbol"};
// v15 = .object(ofGroup: Object, withProperties: ["e", "toString", "c", "a", "__proto__"])
function v17(v18,v19,v20,v21) {
    'use strict'
    const v23 = v6.includes(v21,v7,v6,"name",v21);
    // v23 = .boolean
}
const v24 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "call", "getPrototypeOf", "deleteProperty", "set", "has", "preventExtensions", "ownKeys", "get", "isExtensible", "setPrototypeOf"])
const v26 = new Proxy(v15,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
