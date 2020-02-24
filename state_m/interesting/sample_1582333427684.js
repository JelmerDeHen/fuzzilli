function main() {
const v4 = ["5hV/2mbTBY","5hV/2mbTBY",1320432668,1320432668];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = v4.__proto__;
// v5 = .object()
v5.constructor = Uint16Array;
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = [-4294967295,13.37,2];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v11 = v9;
const v14 = [];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v15 = {length:1337,e:1337,c:v14,a:1337,toString:"symbol"};
// v15 = .object(ofGroup: Object, withProperties: ["length", "a", "e", "toString", "__proto__", "c"])
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        const v23 = v10.concat(1337,v11,v10,"name",v21);
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    } catch(v24) {
    }
}
const v25 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "call", "deleteProperty", "isExtensible", "get", "has", "set", "getPrototypeOf", "preventExtensions", "ownKeys", "construct"])
const v27 = new Proxy(v15,v25);
// v27 = .unknown
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
