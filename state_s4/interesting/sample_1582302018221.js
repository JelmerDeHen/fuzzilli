function main() {
let v1 = Int32Array;
const v4 = String.fromCharCode(v1,-3789366927);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v14 = JSON.parse(v4);
        // v14 = .unknown
    } catch(v15) {
    }
}
const v16 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "getPrototypeOf", "preventExtensions", "call", "deleteProperty", "has", "set", "setPrototypeOf", "isExtensible", "construct", "ownKeys"])
const v18 = new Proxy(v7,v16);
// v18 = .unknown
v18[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
