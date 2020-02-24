function main() {
const v3 = arguments + 1;
// v3 = .primitive
const v5 = [1337,1337,"MIN_VALUE",1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v12 = {};
        // v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v13 = [v12];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v14 = {construct:v8,defineProperty:v9,isExtensible:v8,setPrototypeOf:v6,call:v6,apply:v6,set:v6,ownKeys:v10,preventExtensions:v8,deleteProperty:v6};
        // v14 = .object(ofGroup: Object, withProperties: ["ownKeys", "defineProperty", "isExtensible", "construct", "preventExtensions", "__proto__"], withMethods: ["setPrototypeOf", "set", "apply", "call", "deleteProperty"])
        const v16 = new Proxy(v12,v14);
        // v16 = .unknown
        let v18 = 0;
        while (v18 <= 4) {
            const v19 = v18 + 1;
            // v19 = .primitive
            v18 = v19;
        }
        v10[3] = 0;
    } catch(v20) {
        let v21 = v3;
        const v22 = [];
        // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v23 = {a:v22};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
    }
    return v10;
}
const v24 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:1337,has:v6};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["preventExtensions", "deleteProperty", "getPrototypeOf", "ownKeys", "isExtensible", "set", "construct", "get", "has", "call"])
const v26 = new Proxy(v5,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
