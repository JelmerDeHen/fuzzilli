function main() {
const v2 = {a:-3395007765,c:"undefined"};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "c"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {valueOf:v4,__proto__:v4};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
let v7 = 13.37;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        v15[3] = v15;
        const v16 = v5();
        // v16 = .unknown
        const v17 = v16[-2900725722];
        // v17 = .unknown
        const v19 = [863175818];
        // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        let v20 = v19;
        let v22 = undefined;
        for (const v24 in "boolean") {
            if (v14) {
                const v25 = v16.__proto__;
                // v25 = .unknown
                let v28 = 0;
                function v29(v30,v31,v32) {
                    for (const v33 in v2) {
                        delete (5)[v33];
                    }
                }
            } else {
            }
        }
        const v34 = !v13;
        // v34 = .boolean
        const v36 = Symbol.search;
        // v36 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    } catch(v37) {
    }
    return v7;
}
const v38 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,constructor:v11,has:v11};
// v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "constructor", "get", "deleteProperty", "call", "ownKeys", "getPrototypeOf", "isExtensible", "construct", "set", "has"])
const v42 = new Int32Array(20418);
// v42 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "length", "__proto__", "byteLength", "byteOffset"], withMethods: ["findIndex", "sort", "fill", "every", "subarray", "lastIndexOf", "copyWithin", "indexOf", "reduce", "values", "find", "slice", "reduceRight", "reverse", "includes", "keys", "filter", "map", "some", "entries", "forEach", "set", "join"])
const v43 = new Proxy(v10,v38);
// v43 = .unknown
v43[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
