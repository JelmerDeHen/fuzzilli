function main() {
try {
    const v2 = [13.37,13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v3(v4,v5) {
        const v8 = [1337,1337,1337,1337,1337];
        // v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        function v9(v10,v11,v12,v13) {
            'use strict'
            const v16 = new Float64Array(1337);
            // v16 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
            let v17 = v16;
            let v18 = v17;
            const v21 = new Proxy(v18,Object);
            // v21 = .unknown
            const v22 = Object.freeze(v21);
            // v22 = .undefined
        }
        const v23 = {deleteProperty:v9,set:v9,getPrototypeOf:1337,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
        // v23 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "__proto__"], withMethods: ["has", "isExtensible", "ownKeys", "setPrototypeOf", "get", "call", "set", "preventExtensions", "construct", "deleteProperty"])
        const v25 = new Proxy(v8,v23);
        // v25 = .unknown
        v25[1] = "MIN_VALUE";
    }
    const v26 = ["undefined",v2];
    // v26 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v29 = new Int16Array(19873);
    // v29 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
    const v30 = v3(...v26,...v29);
    // v30 = .unknown
} catch(v31) {
}
}
%NeverOptimizeFunction(main);
main();
