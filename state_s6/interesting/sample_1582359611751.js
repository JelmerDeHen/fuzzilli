function main() {
try {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        const v11 = [13.37,13.37,13.37];
        // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        function v12(v13,v14) {
            const v17 = [1337,1337,1337,1337,1337];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            function v18(v19,v20,v21,v22) {
                'use strict'
                let v23 = v4;
                const v26 = new Proxy(v23,Object);
                // v26 = .unknown
                const v27 = Object.freeze(v26);
                // v27 = .undefined
                return v17;
            }
            const v28 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
            // v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "preventExtensions", "getPrototypeOf", "isExtensible", "ownKeys", "call", "construct", "set", "has", "deleteProperty", "setPrototypeOf"])
            const v30 = new Proxy(v17,v28);
            // v30 = .unknown
            v30[1] = "MIN_VALUE";
        }
        const v31 = [Symbol,v11];
        // v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v33 = new Int16Array("DxlRXuajnj");
        // v33 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
        const v34 = v12(...v31,...v33);
        // v34 = .unknown
        return v4;
    }
    const v35 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "ownKeys", "getPrototypeOf", "construct", "preventExtensions", "has", "deleteProperty", "set", "isExtensible", "get", "call"])
    const v37 = new Proxy(v4,v35);
    // v37 = .unknown
    v37[1] = "MIN_VALUE";
} catch(v38) {
}
}
%NeverOptimizeFunction(main);
main();
