function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v9 = [13.37,13.37,13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v10(v11,v12) {
        const v15 = [13.37];
        // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        function v16(v17,v18) {
            for (const v20 in "boolean") {
                let v22 = 0;
                const v25 = new Int32Array(13.37);
                // v25 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["sort", "forEach", "filter", "fill", "lastIndexOf", "reduce", "map", "reduceRight", "find", "keys", "every", "set", "join", "values", "subarray", "copyWithin", "slice", "indexOf", "reverse", "entries", "findIndex", "some", "includes"])
                const v26 = v22 + 1;
                // v26 = .primitive
                const v27 = v18(0,v25,v22,v15);
                // v27 = .unknown
            }
        }
        const v31 = ["nVkEIOUd+c",13.37];
        // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v32 = {b:v31};
        // v32 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
        const v33 = new Promise(v16,v32,"undefined",v15,"undefined");
        // v33 = .object()
        let v37 = -128;
        let v39 = 0;
        while (v39 < 1337) {
            const v40 = v39 + 1;
            // v40 = .primitive
            v39 = v40;
        }
    }
    const v41 = v9.sort(v10);
    // v41 = .undefined
}
const v42 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v42 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "preventExtensions", "has", "ownKeys", "isExtensible", "getPrototypeOf", "set", "construct", "call", "deleteProperty", "setPrototypeOf"])
const v44 = new Proxy(v2,v42);
// v44 = .unknown
v44[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
