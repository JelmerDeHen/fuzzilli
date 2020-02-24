function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
        let v11 = eval;
        const v12 = [];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v13 = {a:v12};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
        const v14 = {__proto__:eval,constructor:v13,length:v12};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"], withMethods: ["__proto__"])
        const v15 = v11 in v14;
        // v15 = .boolean
    }
    return v3;
}
const v16 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:1337,has:v4};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["preventExtensions", "getPrototypeOf", "get", "ownKeys", "set", "call", "construct", "has", "deleteProperty", "isExtensible"])
const v18 = new Proxy(v3,v16);
// v18 = .unknown
v18[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
