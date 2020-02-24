function main() {
try {
    const v2 = [13.37,13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v3(v4,v5) {
        const v8 = [1337,1337,1337,1337,1337];
        // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        function v9(v10,v11,v12,v13) {
            'use strict'
            const v16 = new Float64Array(1337);
            // v16 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
            let v17 = v16;
            let v18 = v17;
            const v21 = new Proxy(v18,Object);
            // v21 = .unknown
            const v22 = Object.freeze(v21);
            // v22 = .undefined
        }
        const v23 = {deleteProperty:v9,set:v9,getPrototypeOf:1337,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf"], withMethods: ["isExtensible", "set", "ownKeys", "call", "get", "setPrototypeOf", "has", "preventExtensions", "deleteProperty", "construct"])
        const v25 = new Proxy(v8,v23);
        // v25 = .unknown
        v25[1] = "MIN_VALUE";
    }
    const v26 = ["undefined",v2];
    // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v29 = new Int16Array(19873);
    // v29 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
    const v30 = v3(...v26,...v29);
    // v30 = .unknown
} catch(v31) {
}
}
%NeverOptimizeFunction(main);
main();
