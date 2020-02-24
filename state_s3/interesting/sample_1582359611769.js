function main() {
try {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        const v11 = [13.37,13.37,13.37];
        // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        function v12(v13,v14) {
            const v17 = [1337,1337,1337,1337,1337];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
            // v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "has", "ownKeys", "set", "isExtensible", "setPrototypeOf", "get", "call", "construct", "preventExtensions", "deleteProperty"])
            const v30 = new Proxy(v17,v28);
            // v30 = .unknown
            v30[1] = "MIN_VALUE";
        }
        const v31 = [Symbol,v11];
        // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v33 = new Int16Array("DxlRXuajnj");
        // v33 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
        const v34 = v12(...v31,...v33);
        // v34 = .unknown
        return v4;
    }
    const v35 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "get", "construct", "preventExtensions", "getPrototypeOf", "set", "deleteProperty", "isExtensible", "call", "setPrototypeOf", "ownKeys"])
    const v37 = new Proxy(v4,v35);
    // v37 = .unknown
    v37[1] = "MIN_VALUE";
} catch(v38) {
}
}
%NeverOptimizeFunction(main);
main();
