function main() {
const v2 = {a:-3395007765,c:"undefined"};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "a"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {valueOf:v4,__proto__:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v7 = 13.37;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        v15[3] = v15;
        const v16 = v5();
        // v16 = .unknown
        const v17 = v16[-2900725722];
        // v17 = .unknown
        const v19 = [863175818];
        // v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "deleteProperty", "call", "getPrototypeOf", "construct", "get", "set", "ownKeys", "constructor", "has", "isExtensible"])
const v42 = new Int32Array(20418);
// v42 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
const v43 = new Proxy(v10,v38);
// v43 = .unknown
v43[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
