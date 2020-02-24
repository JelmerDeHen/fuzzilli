function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
for (const v3 in "object") {
    const v6 = [1337,1337,1337,1337,1337];
    // v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    function v7(v8,v9,v10,v11) {
        'use strict'
        try {
            const v14 = new Float32Array(19873);
            // v14 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "constructor", "__proto__", "buffer", "byteOffset", "length"], withMethods: ["entries", "sort", "fill", "some", "reduceRight", "map", "values", "includes", "copyWithin", "reverse", "indexOf", "filter", "findIndex", "find", "every", "set", "keys", "subarray", "reduce", "slice", "forEach", "join", "lastIndexOf"])
            v11[3] = v11;
        } catch(v15) {
            let v18 = 0;
            const v19 = v18 + 1;
            // v19 = .primitive
            v18 = v19;
        }
        return v6;
    }
    const v21 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "set", "preventExtensions", "getPrototypeOf", "isExtensible", "has", "get", "construct", "ownKeys", "deleteProperty", "setPrototypeOf"])
    const v23 = new Proxy(v6,v21);
    // v23 = .unknown
    v23[1] = "MIN_VALUE";
    const v25 = [1337];
    // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v26 = v25;
    let v28 = undefined;
    for (const v30 in "boolean") {
        let v33 = 0;
        do {
            let v35 = 0;
            const v36 = v35 + 1;
            // v36 = .primitive
            v35 = v36;
            const v37 = v33 + 1;
            // v37 = .primitive
            v33 = v37;
            const v42 = [13.37];
            // v42 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v47 = [13.37,13.37,13.37,13.37,13.37];
            // v47 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v48 = [v47,v47,v47];
            // v48 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v49 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v47,__proto__:v48};
            // v49 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "length"])
            const v50 = [v49];
            // v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v51 = new WeakMap(v50);
            // v51 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["has", "set", "delete", "get"])
            v42.__proto__ = v51;
        } while (v33 < 8);
    }
}
const v52 = gc();
// v52 = .undefined
}
%NeverOptimizeFunction(main);
main();
