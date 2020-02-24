function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = 13.37;
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        v10[3] = v0;
        const v11 = v8();
        // v11 = .unknown
        const v12 = v11[-2900725722];
        // v12 = .unknown
        const v15 = [276307.2050490922,276307.2050490922,276307.2050490922,276307.2050490922];
        // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v17 = 0;
        const v18 = v17 + 1;
        // v18 = .primitive
        const v20 = [1337];
        // v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v23 = {constructor:"symbol",length:9007199254740993};
        // v23 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
        const v24 = [];
        // v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v25 = Boolean();
        // v25 = .boolean
        for (const v27 in "boolean") {
            let v30 = 0;
            do {
                const v33 = [7];
                // v33 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
                let v34 = v33;
                let v36 = undefined;
                const v37 = v30 + 1;
                // v37 = .primitive
            } while (v30 < 8);
        }
        const v38 = v20(v24,v23);
        // v38 = .unknown
        function v39(v40,v41) {
            let v45 = 0;
            return v39;
        }
    } catch(v46) {
    }
    return v2;
}
const v47 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v47 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "isExtensible", "deleteProperty", "getPrototypeOf", "setPrototypeOf", "construct", "ownKeys", "get", "call", "has", "set"])
const v49 = new Proxy(v5,v47);
// v49 = .unknown
v49[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
