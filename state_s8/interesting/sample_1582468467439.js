function main() {
function v1(v2,v3,v4,v5) {
    'use strict'
    try {
        const v8 = new Int16Array(1337);
        // v8 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
        const v11 = [1337,1337,1337,1337,1337];
        // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        function v12(v13,v14,v15,v16) {
            'use strict'
            let v19 = 0;
            let v22 = 0;
            const v23 = v22 + 1;
            // v23 = .primitive
            v22 = v23;
            const v24 = v19 + 1;
            // v24 = .primitive
            v19 = v24;
            const v25 = v8.set(v16,1863774282);
            // v25 = .undefined
        }
        const v29 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
        // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "has", "ownKeys", "get", "preventExtensions", "setPrototypeOf", "deleteProperty", "call", "set", "isExtensible", "getPrototypeOf"])
        const v31 = new Proxy(v11,v29);
        // v31 = .unknown
        v31[1] = "MIN_VALUE";
    } catch(v32) {
    }
}
const v34 = [1337,1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v37 = [13.37,13.37,13.37,13.37];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v38 = [v37,-2,v34];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v39 = v1(v38,v1);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
