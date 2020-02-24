function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v5 = 0;
do {
    let v8 = 0;
    const v9 = v8 + 1;
    // v9 = .primitive
    v8 = v9;
    const v10 = v5 + 1;
    // v10 = .primitive
    const v11 = typeof v2;
    // v11 = .string
    const v15 = [1337,1337,1337,1337,1337];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            v20[3] = v20;
        } catch(v21) {
            let v23 = eval;
            const v24 = [];
            // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v25 = {a:v24};
            // v25 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
            const v26 = {__proto__:eval,constructor:v25,length:v24};
            // v26 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"], withMethods: ["__proto__"])
            const v27 = v23 in v26;
            // v27 = .boolean
        }
        return v15;
    }
    const v28 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:1337,has:v16};
    // v28 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["call", "set", "has", "construct", "ownKeys", "deleteProperty", "isExtensible", "getPrototypeOf", "get", "preventExtensions"])
    const v30 = new Proxy(v15,v28);
    // v30 = .unknown
    v30[1] = "MIN_VALUE";
    const v31 = v11 === "object";
    // v31 = .boolean
    v5 = v10;
} while (v5 < 10);
}
%NeverOptimizeFunction(main);
main();
