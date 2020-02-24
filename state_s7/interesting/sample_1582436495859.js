function main() {
try {
    const v2 = [1337,1337,1337,1337,1337];
    // v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v3(v4,v5,v6,v7) {
        'use strict'
        const v9 = [13.37,13.37,13.37];
        // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        function v10(v11,v12) {
            const v15 = [1337,1337,1337,1337,1337];
            // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
            // v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "construct", "setPrototypeOf", "length", "call", "get", "ownKeys", "getPrototypeOf", "set", "deleteProperty", "isExtensible"])
            const v29 = new Proxy(v15,v27);
            // v29 = .unknown
            v29[1] = "MIN_VALUE";
        }
        const v30 = [v4,v9];
        // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v33 = new Int16Array(19873);
        // v33 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
        const v34 = v10(...v30,...v33);
        // v34 = .unknown
    }
    const v35 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,length:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
    // v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "preventExtensions", "get", "setPrototypeOf", "set", "deleteProperty", "getPrototypeOf", "has", "length", "call", "construct"])
    const v37 = new Proxy(v2,v35);
    // v37 = .unknown
    v37[1] = "MIN_VALUE";
} catch(v38) {
}
}
%NeverOptimizeFunction(main);
main();
