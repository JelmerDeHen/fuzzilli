function main() {
function v0(v1,v2,v3,v4) {
    'use strict'
    try {
        const v7 = [1337,1337,1337,1337,1337];
        // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        function v8(v9,v10,v11,v12) {
            'use strict'
            const v15 = [1337,1337,1337,1337,1337];
            // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            function v16(v17,v18,v19,v20) {
                'use strict'
                const v22 = {set:Symbol};
                // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
                const v24 = Object.defineProperty(v15,v18,v22);
                // v24 = .undefined
                const v25 = v17.includes();
                // v25 = .unknown
            }
            const v26 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
            // v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "set", "ownKeys", "get", "setPrototypeOf", "construct", "isExtensible", "has", "getPrototypeOf", "deleteProperty", "call"])
            const v28 = new Proxy(v15,v26);
            // v28 = .unknown
            v28[1] = "MIN_VALUE";
        }
        const v29 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
        // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set", "isExtensible", "has", "getPrototypeOf", "preventExtensions", "deleteProperty", "ownKeys", "call", "construct", "setPrototypeOf"])
        const v31 = new Proxy(v7,v29);
        // v31 = .unknown
        v31[1] = "MIN_VALUE";
    } catch(v32) {
    }
}
const v34 = [1337,1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v37 = [13.37,13.37,13.37,13.37];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v38 = [v37,-2,v34];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v39 = v0(v38,v0);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
