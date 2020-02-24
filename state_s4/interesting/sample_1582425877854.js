function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v5 = v3;
const v11 = [1337,Uint8ClampedArray];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = [1468489541,0,2];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v13 = v11;
v12.length = 6;
const v16 = v12.fill(1337);
// v16 = .undefined
const v17 = [];
// v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v18 = {length:1337,e:1337,c:v17,a:1337,toString:"symbol"};
// v18 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "toString", "length", "a", "c"])
function v19(v20,v21,v22,v23) {
    'use strict'
    const v24 = v12.includes(v23,v13,v12,v18,v23);
    // v24 = .boolean
}
const v25 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "call", "isExtensible", "construct", "preventExtensions", "getPrototypeOf", "deleteProperty", "get", "has", "set", "setPrototypeOf"])
const v27 = new Proxy(v18,v25);
// v27 = .unknown
delete v27[v5];
}
%NeverOptimizeFunction(main);
main();
