function main() {
const v4 = [parseInt,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v10 = {};
        // v10 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v12 = [1337,1337];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v13 = 13.37 || v5;
        // v13 = .boolean
        let v15 = 0;
        v9[3] = v9;
    } catch(v16) {
        const v19 = new ArrayBuffer(1337);
        // v19 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
        const v22 = v19.slice(1024,1337);
        // v22 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    }
}
const v23 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,d:v5};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "d", "isExtensible", "set", "construct", "preventExtensions", "ownKeys", "getPrototypeOf", "call", "setPrototypeOf", "get"])
const v25 = new Proxy(v4,v23);
// v25 = .unknown
v25[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
