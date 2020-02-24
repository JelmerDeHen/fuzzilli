function main() {
let v1 = Int32Array;
const v4 = String.fromCharCode(v1,-3789366927);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v14 = JSON.parse(v4);
        // v14 = .unknown
    } catch(v15) {
    }
}
const v16 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "getPrototypeOf", "has", "setPrototypeOf", "isExtensible", "set", "ownKeys", "deleteProperty", "preventExtensions", "get", "construct"])
const v18 = new Proxy(v7,v16);
// v18 = .unknown
v18[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
