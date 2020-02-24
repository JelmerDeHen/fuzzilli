function main() {
let v7 = 0;
const v8 = [-3962557577,-3962557577];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = [1468489541,-1000000.0,2];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v10 = v8;
const v13 = [];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v16 = 0;
let v19 = 0;
v9[8] = 1337;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v21 = v16 + 1;
// v21 = .primitive
v16 = v21;
const v23 = {get:Uint8ClampedArray};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v25 = Object.seal(v9,65537,v23);
// v25 = .object()
const v26 = {a:1337,e:1337,c:v13,a:1337,toString:"symbol"};
// v26 = .object(ofGroup: Object, withProperties: ["e", "c", "a", "toString", "__proto__"])
function v28(v29,v30,v31,v32) {
    'use strict'
    const v34 = v9.includes(-3962557577,v10,v9,"name",v32);
    // v34 = .boolean
}
const v35 = {deleteProperty:v28,set:v28,getPrototypeOf:v28,call:v28,preventExtensions:v28,isExtensible:v28,construct:v28,get:v28,ownKeys:v28,setPrototypeOf:v28,has:v28};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "get", "preventExtensions", "call", "construct", "getPrototypeOf", "set", "deleteProperty", "setPrototypeOf", "isExtensible", "has"])
const v37 = new Proxy(v26,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
