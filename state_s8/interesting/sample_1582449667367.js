function main() {
const v1 = [5.0,5.0,5.0,5.0];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v2(v3,v4) {
    const v7 = [13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    function v8(v9,v10) {
        const v12 = [1337,1337,1337,1337,1337];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        function v13(v14,v15,v16,v17) {
            'use strict'
        }
        const v18 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
        // v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "isExtensible", "call", "construct", "setPrototypeOf", "preventExtensions", "deleteProperty", "getPrototypeOf", "get", "has", "set"])
        const v20 = new Proxy(v12,v18);
        // v20 = .unknown
        const v22 = [505430.5915189937,505430.5915189937,505430.5915189937,505430.5915189937];
        // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        function v24(v25,v26) {
            v20[v25] = "POSITIVE_INFINITY";
        }
        for (let v31 = 0; v31 < 100; v31++) {
            const v32 = v24(7,v22);
            // v32 = .unknown
        }
    }
    const v37 = ["nVkEIOUd+c",13.37];
    // v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v38 = {b:v37};
    // v38 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    const v39 = new Promise(v8,v38,"undefined",v7,"undefined");
    // v39 = .object()
    let v42 = 0;
    while (v42 < 1337) {
        const v43 = v42 + 1;
        // v43 = .primitive
        v42 = v43;
    }
}
const v44 = v1.sort(v2);
// v44 = .undefined
}
%NeverOptimizeFunction(main);
main();
