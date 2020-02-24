function main() {
try {
    const v2 = [13.37,13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    function v3(v4,v5) {
        const v8 = [1337,1337,1337,1337,1337];
        // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        function v9(v10,v11,v12,v13) {
            'use strict'
            const v16 = new Float64Array(1337);
            // v16 = .object(ofGroup: Float64Array, withProperties: ["constructor", "buffer", "__proto__", "byteOffset", "length", "byteLength"], withMethods: ["findIndex", "slice", "map", "find", "includes", "entries", "forEach", "some", "indexOf", "subarray", "reduce", "reduceRight", "fill", "join", "sort", "values", "keys", "copyWithin", "reverse", "filter", "set", "lastIndexOf", "every"])
            let v17 = v16;
            let v18 = v17;
            const v21 = new Proxy(v18,Object);
            // v21 = .unknown
            const v22 = Object.freeze(v21);
            // v22 = .undefined
        }
        const v23 = {deleteProperty:v9,set:v9,getPrototypeOf:1337,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf"], withMethods: ["isExtensible", "get", "has", "call", "set", "setPrototypeOf", "deleteProperty", "ownKeys", "construct", "preventExtensions"])
        const v25 = new Proxy(v8,v23);
        // v25 = .unknown
        v25[1] = "MIN_VALUE";
    }
    const v26 = ["undefined",v2];
    // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v29 = new Int16Array(19873);
    // v29 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
    const v30 = v3(...v26,...v29);
    // v30 = .unknown
} catch(v31) {
}
}
%NeverOptimizeFunction(main);
main();
