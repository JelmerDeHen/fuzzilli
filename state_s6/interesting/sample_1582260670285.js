function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [v5,v3];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {c:v6,valueOf:Int8Array,e:2600425381,constructor:1337};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "e", "valueOf", "c"])
let v8 = v7;
for (let v12 = 0; v12 < 3; v12++) {
    const v14 = [1337];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v16 = undefined;
    function v17(v18,v19) {
        const v20 = v18 in v17;
        // v20 = .boolean
        const v24 = [13.37,13.37,13.37,13.37];
        // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v26 = [1337,v24];
        // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v27 = {b:v26,a:v17,__proto__:v26};
        // v27 = .object(ofGroup: Object, withProperties: ["__proto__", "b"], withMethods: ["a"])
        try {
            const v28 = v27 instanceof eval;
            // v28 = .boolean
        } catch(v29) {
        }
        const v30 = v17 >> v12;
        // v30 = .integer
        const v31 = {preventExtensions:v19,isExtensible:v19,construct:v17,get:v18,getOwnPropertyDescriptor:v17,set:v18,apply:v17,getPrototypeOf:eval,call:v18,setPrototypeOf:v17};
        // v31 = .object(ofGroup: Object, withProperties: ["get", "isExtensible", "preventExtensions", "call", "__proto__", "set"], withMethods: ["getPrototypeOf", "getOwnPropertyDescriptor", "apply", "setPrototypeOf", "construct"])
        const v32 = typeof v8;
        // v32 = .string
        const v34 = v32 === "undefined";
        // v34 = .boolean
        delete v14.length;
        const v35 = [...v14,v31,v6,...v32];
        // v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v37 = new Proxy(Int8Array,v31);
        // v37 = .unknown
        function v38(v39,v40) {
            'use strict'
            const v41 = v14.forEach(v19,v39);
            // v41 = .undefined
        }
        v16 = v8;
        for (const v42 in "boolean") {
            let v45 = 0;
            do {
                let v48 = 0;
                do {
                    const v49 = v48 + 1;
                    // v49 = .primitive
                    v48 = v49;
                } while (v48 < 7);
                const v50 = v45 + 1;
                // v50 = .primitive
                v45 = v50;
            } while (v45 < 8);
        }
    }
    const v52 = [1337];
    // v52 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v53 = v52;
    const v54 = v17(v53);
    // v54 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
