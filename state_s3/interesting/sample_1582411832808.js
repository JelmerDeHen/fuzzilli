function main() {
try {
    const v2 = [13.37,13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v3(v4,v5) {
        const v8 = [1337,1337,1337,1337,1337];
        // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        function v9(v10,v11,v12,v13) {
            'use strict'
            const v16 = new Float64Array(1337);
            // v16 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["filter", "set", "every", "join", "copyWithin", "reverse", "slice", "keys", "fill", "sort", "indexOf", "some", "subarray", "reduce", "reduceRight", "map", "values", "includes", "forEach", "lastIndexOf", "entries", "findIndex", "find"])
            let v17 = v16;
            let v18 = v17;
            const v21 = new Proxy(v18,Object);
            // v21 = .unknown
            const v22 = Object.freeze(v21);
            // v22 = .undefined
        }
        const v23 = {deleteProperty:v9,set:v9,getPrototypeOf:1337,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf"], withMethods: ["get", "call", "ownKeys", "deleteProperty", "preventExtensions", "has", "isExtensible", "setPrototypeOf", "construct", "set"])
        const v25 = new Proxy(v8,v23);
        // v25 = .unknown
        v25[1] = "MIN_VALUE";
    }
    const v26 = ["undefined",v2];
    // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v29 = new Int16Array(19873);
    // v29 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
    const v30 = v3(...v26,...v29);
    // v30 = .unknown
} catch(v31) {
}
}
%NeverOptimizeFunction(main);
main();
