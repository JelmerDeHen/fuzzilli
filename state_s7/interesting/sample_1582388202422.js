function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {__proto__:parseFloat,a:v4,toString:"byteLength",length:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "toString", "a"], withMethods: ["__proto__"])
const v9 = [1337,1337,1337,1337,ArrayBuffer];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        const v15 = v5.caller;
        // v15 = .unknown
    } catch(v16) {
        try {
            const v18 = Function(v16);
            // v18 = .unknown
        } catch(v19) {
        }
    }
}
const v20 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "construct", "setPrototypeOf", "preventExtensions", "set", "isExtensible", "getPrototypeOf", "ownKeys", "has", "call", "get"])
const v22 = new Proxy(v9,v20);
// v22 = .unknown
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
