function main() {
const v6 = ["5hV/2mbTBY","5hV/2mbTBY",1320432668,1320432668];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = v6.__proto__;
// v7 = .object()
v7.constructor = Uint16Array;
const v11 = [1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v12 = [-4294967295,13.37,2];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v13 = v11;
const v16 = [];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v17 = "symbol".endsWith("symbol",-2608249932);
// v17 = .boolean
const v22 = {get:parseFloat};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v24 = Object.defineProperty(v12,65537,v22);
// v24 = .undefined
const v25 = {length:1337,e:1337,c:v16,a:1337,toString:"symbol"};
// v25 = .object(ofGroup: Object, withProperties: ["a", "e", "toString", "length", "c", "__proto__"])
function v27(v28,v29,v30,v31) {
    'use strict'
    try {
        const v33 = v12.concat(1337,v13,v12,"name",v31);
        // v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    } catch(v34) {
    }
}
const v35 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:v27,has:v27};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "call", "setPrototypeOf", "deleteProperty", "get", "construct", "isExtensible", "set", "ownKeys", "getPrototypeOf", "preventExtensions"])
const v37 = new Proxy(v25,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();