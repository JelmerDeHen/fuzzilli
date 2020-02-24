function main() {
const v2 = [1337,1337,"MIN_VALUE",1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        let v10 = 0;
        while (v10 < 4) {
            const v11 = v10 + 1;
            // v11 = .primitive
            v10 = v11;
        }
        v7[3] = v7;
    } catch(v12) {
        let v13 = "MIN_VALUE";
        const v14 = [];
        // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v15 = {a:v14};
        // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
        const v16 = {__proto__:v7,constructor:v15,length:v14};
        // v16 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
        const v17 = v13 in v16;
        // v17 = .boolean
    }
}
const v18 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:1337,has:v3};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["ownKeys", "set", "preventExtensions", "get", "construct", "isExtensible", "getPrototypeOf", "has", "call", "deleteProperty"])
const v20 = new Proxy(v2,v18);
// v20 = .unknown
v20[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
