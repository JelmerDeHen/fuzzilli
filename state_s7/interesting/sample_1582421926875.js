function main() {
function v0(v1,v2,v3,v4) {
    'use strict'
    try {
        const v7 = [1337,1337,1337,1337,1337];
        // v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        function v8(v9,v10,v11,v12) {
            'use strict'
            let v14 = undefined;
            const v17 = [1337,1337,1337,1337,1337];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            function v18(v19,v20,v21,v22) {
                'use strict'
                const v23 = {set:v14};
                // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
                const v25 = Object.defineProperty(v17,v20,v23);
                // v25 = .undefined
                return v21;
            }
            const v26 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,__proto__:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
            // v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "call", "getPrototypeOf", "setPrototypeOf", "has", "__proto__", "ownKeys", "get", "deleteProperty", "preventExtensions", "isExtensible"])
            const v28 = new Proxy(v17,v26);
            // v28 = .unknown
            v28[65537] = "MIN_VALUE";
        }
        const v29 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
        // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "getPrototypeOf", "isExtensible", "ownKeys", "get", "call", "setPrototypeOf", "construct", "deleteProperty", "has"])
        const v31 = new Proxy(v7,v29);
        // v31 = .unknown
        v31[1] = "MIN_VALUE";
    } catch(v32) {
    }
}
const v34 = [1337,1337];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v37 = [13.37,13.37,13.37,13.37];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v38 = [v37,-2,v34];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v39 = v0(v38,v0);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();