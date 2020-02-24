function main() {
let v1 = Int32Array;
const v4 = String.fromCharCode(v1,-3789366927);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v14 = JSON.parse(v4);
        // v14 = .unknown
    } catch(v15) {
    }
}
const v16 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "isExtensible", "deleteProperty", "has", "call", "get", "ownKeys", "construct", "getPrototypeOf", "set", "preventExtensions"])
const v18 = new Proxy(v7,v16);
// v18 = .unknown
v18[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
