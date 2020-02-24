function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
        const v11 = {has:v5,set:v9};
        // v11 = .object(ofGroup: Object, withProperties: ["has", "__proto__", "set"])
        const v13 = new Proxy(v9,v11);
        // v13 = .unknown
        const v14 = "MIN_VALUE".codePointAt(v13);
        // v14 = .integer
        let v15 = 0;
        const v16 = v15 + 1;
        // v16 = .primitive
        const v19 = 2.2250738585072014e-308 / 3890419937;
        // v19 = .number
        const v20 = [v19];
        // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        let v21 = v20;
        const v23 = Math.acosh(v21);
        // v23 = .number
    }
}
const v24 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "call", "set", "ownKeys", "preventExtensions", "construct", "isExtensible", "get", "deleteProperty", "getPrototypeOf", "setPrototypeOf"])
const v26 = new Proxy(v3,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
