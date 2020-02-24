function main() {
let v2 = 13.37;
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        v10[3] = v10;
        const v11 = v8();
        // v11 = .unknown
        const v12 = v11[-2900725722];
        // v12 = .unknown
        function v13(v14,v15) {
            for (const v17 in "boolean") {
                if (v9) {
                    let v20 = 0;
                    do {
                        for (const v21 in v7) {
                            const v22 = [v21,v13];
                            // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
                        }
                    } while (v20 < 5);
                } else {
                }
            }
        }
        const v24 = [1337];
        // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v25 = v24;
        const v26 = v13(v25);
        // v26 = .unknown
        const v27 = !v8;
        // v27 = .boolean
        let v28 = v2;
        for (const v29 in v12) {
            const v31 = Symbol.search;
            // v31 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v32 = Symbol[v31];
            // v32 = .unknown
        }
        let v34 = 0;
    } catch(v35) {
    }
    return v2;
}
const v36 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v36 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "getPrototypeOf", "get", "isExtensible", "set", "deleteProperty", "preventExtensions", "ownKeys", "setPrototypeOf", "construct", "has"])
const v38 = new Proxy(v5,v36);
// v38 = .unknown
v38[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
