function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
        const v11 = {};
        // v11 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v14 = "species";
        const v15 = new Proxy(v11,Reflect);
        // v15 = .unknown
        v14 = v15;
        const v17 = [1337];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        v14[7] = v17;
    }
    return v3;
}
const v20 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "set", "construct", "isExtensible", "preventExtensions", "setPrototypeOf", "ownKeys", "getPrototypeOf", "deleteProperty", "has", "get"])
const v22 = new Proxy(v3,v20);
// v22 = .unknown
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
