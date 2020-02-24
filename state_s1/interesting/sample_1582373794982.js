function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
        const v11 = {has:v5,set:v9};
        // v11 = .object(ofGroup: Object, withProperties: ["has", "set", "__proto__"])
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
        // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        let v21 = v20;
        const v23 = Math.acosh(v21);
        // v23 = .number
    }
}
const v24 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "has", "deleteProperty", "preventExtensions", "set", "setPrototypeOf", "ownKeys", "getPrototypeOf", "call", "get", "isExtensible"])
const v26 = new Proxy(v3,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
