function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        v1.__proto__ = v10;
    } catch(v11) {
    }
}
const v12 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "isExtensible", "get", "deleteProperty", "getPrototypeOf", "preventExtensions", "has", "ownKeys", "call", "construct", "set"])
const v14 = new Proxy(v5,v12);
// v14 = .unknown
v14[1] = "MIN_VALUE";
const v16 = new Uint16Array(v2);
// v16 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
}
%NeverOptimizeFunction(main);
main();
