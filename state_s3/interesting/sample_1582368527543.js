function main() {
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1468489541,13.37,2];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v8 = v6;
v7.length = 6;
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
v8 = 13.37;
const v16 = {get:"symbol"};
// v16 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v18 = Object.seal(v7,65537,v16);
// v18 = .object()
const v19 = {length:1337,e:1337,c:v11,a:1337,toString:"symbol"};
// v19 = .object(ofGroup: Object, withProperties: ["e", "c", "__proto__", "toString", "a", "length"])
function v21(v22,v23,v24,v25) {
    'use strict'
    const v27 = v7.includes(1337,v8,v7,"name",v25);
    // v27 = .boolean
}
const v28 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
// v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "set", "has", "setPrototypeOf", "getPrototypeOf", "get", "call", "ownKeys", "deleteProperty", "preventExtensions", "isExtensible"])
const v30 = new Proxy(v19,v28);
// v30 = .unknown
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
