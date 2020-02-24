function main() {
const v2 = {a:-3395007765,c:"undefined"};
// v2 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {valueOf:v4,__proto__:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v7 = 13.37;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        v15[3] = v15;
        const v16 = v5();
        // v16 = .unknown
        const v17 = v16[-2900725722];
        // v17 = .unknown
        const v19 = [863175818];
        // v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
        // v36 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    } catch(v37) {
    }
    return v7;
}
const v38 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,constructor:v11,has:v11};
// v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "preventExtensions", "set", "getPrototypeOf", "deleteProperty", "isExtensible", "get", "call", "constructor", "ownKeys", "has"])
const v42 = new Int32Array(20418);
// v42 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["find", "sort", "indexOf", "subarray", "entries", "reduce", "reverse", "values", "keys", "forEach", "set", "filter", "findIndex", "includes", "join", "slice", "copyWithin", "reduceRight", "fill", "map", "lastIndexOf", "some", "every"])
const v43 = new Proxy(v10,v38);
// v43 = .unknown
v43[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
