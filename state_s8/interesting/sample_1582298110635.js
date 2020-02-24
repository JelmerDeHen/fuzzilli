function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v10 = new ArrayBuffer(9007199254740993);
        // v10 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    } catch(v11) {
    }
}
const v12 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "get", "preventExtensions", "setPrototypeOf", "set", "deleteProperty", "construct", "getPrototypeOf", "has", "isExtensible", "ownKeys"])
const v14 = new Proxy(v2,v12);
// v14 = .unknown
v14[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
