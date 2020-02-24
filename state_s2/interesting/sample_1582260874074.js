function main() {
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,16,13.37,v4];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v6 = v5;
const v12 = {b:2147483647};
// v12 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v13 = {__proto__:Uint8Array,a:v12,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v13 = .object(ofGroup: Object, withProperties: ["b", "a", "constructor", "d", "__proto__", "valueOf"])
function v14(v15,v16) {
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            const v22 = v14 instanceof v13;
            // v22 = .boolean
            function v23(v24,v25,v26) {
                'use strict'
                const v27 = {defineProperty:v23,call:v15,deleteProperty:isNaN,has:v24,get:v23,getPrototypeOf:isNaN,ownKeys:v23,apply:v26,isExtensible:v23,construct:v24};
                // v27 = .object(ofGroup: Object, withProperties: ["apply", "construct", "__proto__", "has", "call"], withMethods: ["defineProperty", "isExtensible", "deleteProperty", "get", "ownKeys", "getPrototypeOf"])
                return v21;
            }
            const v28 = v13.constructor;
            // v28 = .unknown
            const v29 = v21 + 1;
            // v29 = .primitive
            v21 = v29;
        } while (v21 < 8);
    }
}
const v31 = [54067971];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v32 = v31;
const v33 = v14(v32);
// v33 = .unknown
const v37 = v14(v6,16);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
