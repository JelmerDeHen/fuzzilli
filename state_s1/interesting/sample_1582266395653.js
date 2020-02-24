function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = ["object"];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v6 = 13.37;
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        v14[3] = v14;
        const v15 = v12();
        // v15 = .unknown
        const v16 = v15[-2900725722];
        // v16 = .unknown
        const v17 = !v12;
        // v17 = .boolean
        let v18 = v6;
        if (v12) {
            for (const v19 in v16) {
                const v21 = Symbol.search;
                // v21 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                const v22 = Symbol[v21];
                // v22 = .unknown
            }
        } else {
            let v25 = 0;
            while (v25 < 0) {
                function v26(v27,v28,v29) {
                    const v30 = ~v11;
                    // v30 = .boolean
                }
                const v31 = v25 + 1;
                // v31 = .primitive
            }
        }
    } catch(v32) {
    }
    const v34 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "preventExtensions", "construct", "isExtensible", "get", "getPrototypeOf", "deleteProperty", "getOwnPropertyDescriptor", "set", "ownKeys", "apply"])
    return v6;
}
const v35 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "set", "isExtensible", "ownKeys", "setPrototypeOf", "get", "preventExtensions", "deleteProperty", "call", "construct", "has"])
const v37 = new Proxy(v9,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
