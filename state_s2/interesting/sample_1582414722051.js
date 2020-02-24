function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v9 = [13.37,13.37,13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v10(v11,v12) {
        const v15 = [13.37];
        // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        function v16(v17,v18) {
            let v20 = 0;
            const v21 = v20 + 1;
            // v21 = .primitive
            for (const v23 in "boolean") {
                let v25 = 0;
                const v28 = new Int32Array(13.37);
                // v28 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
                const v29 = v25 + 1;
                // v29 = .primitive
                const v30 = v18(0,v28,v25,v15);
                // v30 = .unknown
            }
        }
        const v34 = ["nVkEIOUd+c",13.37];
        // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v35 = {b:v34};
        // v35 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
        const v36 = new Promise(v16,v35,"undefined",v15,"undefined");
        // v36 = .object()
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
// v42 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "set", "ownKeys", "call", "get", "setPrototypeOf", "has", "preventExtensions", "getPrototypeOf", "deleteProperty", "construct"])
const v44 = new Proxy(v2,v42);
// v44 = .unknown
v44[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
