function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v5 = 13.37;
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        v13[3] = v13;
        const v14 = v11();
        // v14 = .unknown
        const v15 = v14[-2900725722];
        // v15 = .unknown
        const v16 = !v11;
        // v16 = .boolean
        let v17 = v5;
        if (v11) {
            for (const v18 in v15) {
                let v19 = v18;
                const v20 = v18 > 10;
                // v20 = .boolean
                let v21 = WeakSet;
                if (v12) {
                    const v22 = v12[-4294967295];
                    // v22 = .unknown
                } else {
                    const v23 = v15.POSITIVE_INFINITY;
                    // v23 = .unknown
                }
                let v26 = 0;
                const v27 = v26 + 1;
                // v27 = .primitive
                const v29 = Symbol.search;
                // v29 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
                const v30 = Symbol[v29];
                // v30 = .unknown
                const v31 = v15[65537];
                // v31 = .unknown
            }
        } else {
            let v34 = 0;
            const v35 = ~v10;
            // v35 = .boolean
            const v36 = v34 + 1;
            // v36 = .primitive
        }
    } catch(v37) {
    }
    const v39 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "get", "preventExtensions", "ownKeys", "getOwnPropertyDescriptor", "set", "apply", "isExtensible", "getPrototypeOf", "defineProperty", "deleteProperty"])
    return v5;
}
const v40 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
// v40 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "construct", "ownKeys", "preventExtensions", "set", "isExtensible", "call", "getPrototypeOf", "setPrototypeOf", "deleteProperty", "get"])
const v42 = new Proxy(v8,v40);
// v42 = .unknown
v42[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
