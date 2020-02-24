function main() {
try {
    const v2 = [1337,1337,1337,1337,1337];
    // v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    function v3(v4,v5,v6,v7) {
        'use strict'
        const v9 = [13.37,13.37,13.37];
        // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        function v10(v11,v12) {
            const v15 = [1337,1337,1337,1337,1337];
            // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            function v16(v17,v18,v19,v20) {
                'use strict'
                let v21 = v20;
                let v22 = v21;
                const v25 = new Proxy(v22,Object);
                // v25 = .unknown
                const v26 = Object.freeze(v25);
                // v26 = .undefined
            }
            const v27 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,length:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
            // v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length", "setPrototypeOf", "has", "set", "isExtensible", "ownKeys", "getPrototypeOf", "call", "get", "construct", "deleteProperty"])
            const v29 = new Proxy(v15,v27);
            // v29 = .unknown
            v29[1] = "MIN_VALUE";
        }
        const v30 = [v4,v9];
        // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v33 = new Int16Array(19873);
        // v33 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
        const v34 = v10(...v30,...v33);
        // v34 = .unknown
    }
    const v35 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,length:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
    // v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "has", "set", "construct", "setPrototypeOf", "get", "getPrototypeOf", "ownKeys", "call", "deleteProperty", "length"])
    const v37 = new Proxy(v2,v35);
    // v37 = .unknown
    v37[1] = "MIN_VALUE";
} catch(v38) {
}
}
%NeverOptimizeFunction(main);
main();
