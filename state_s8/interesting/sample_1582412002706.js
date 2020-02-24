function main() {
try {
    const v2 = [13.37,13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    function v3(v4,v5) {
        const v8 = [1337,1337,1337,1337,1337];
        // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        function v9(v10,v11,v12,v13) {
            'use strict'
            const v16 = new Float64Array(1337);
            // v16 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
            let v17 = v16;
            let v18 = v17;
            const v21 = new Proxy(v18,Object);
            // v21 = .unknown
            const v22 = Object.freeze(v21);
            // v22 = .undefined
        }
        const v23 = {deleteProperty:v9,set:v9,getPrototypeOf:1337,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf"], withMethods: ["call", "set", "deleteProperty", "construct", "isExtensible", "ownKeys", "has", "setPrototypeOf", "preventExtensions", "get"])
        const v25 = new Proxy(v8,v23);
        // v25 = .unknown
        v25[1] = "MIN_VALUE";
    }
    const v26 = ["undefined",v2];
    // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v29 = new Int16Array(19873);
    // v29 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
    const v30 = v3(...v26,...v29);
    // v30 = .unknown
} catch(v31) {
}
}
%NeverOptimizeFunction(main);
main();
