function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [v6,1337,13.37,Object];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {constructor:Object,__proto__:v6};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["constructor"])
const v9 = {__proto__:13.37,constructor:v6,d:v8,b:v6};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "constructor", "d"])
let v10 = "EPSILON";
const v13 = {a:-3395007765,c:"undefined"};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "a"])
const v15 = [3552565261,3552565261,3552565261,3552565261,3552565261];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v16 = {valueOf:v15,__proto__:v15};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v18 = 13.37;
const v21 = [1337,1337,1337,1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v22(v23,v24,v25,v26) {
    'use strict'
    try {
        v26[3] = v26;
        const v27 = v16();
        // v27 = .unknown
        const v28 = v27[3];
        // v28 = .unknown
        const v30 = [863175818];
        // v30 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v31 = v30;
        let v33 = undefined;
        for (const v35 in "boolean") {
            if (v25) {
                const v36 = v27.__proto__;
                // v36 = .unknown
                let v39 = 0;
                function v40(v41,v42,v43) {
                    for (const v44 in v13) {
                        delete (5)[v44];
                    }
                    return v40;
                }
            } else {
            }
        }
        const v45 = !v24;
        // v45 = .boolean
        const v47 = Symbol.valueOf;
        // v47 = .unknown
    } catch(v48) {
    }
    return v18;
}
const v49 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,constructor:v22,has:v22};
// v49 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "call", "getPrototypeOf", "ownKeys", "preventExtensions", "constructor", "has", "deleteProperty", "construct", "isExtensible", "set"])
const v53 = new Int32Array(20418);
// v53 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
const v54 = new Proxy(v21,v49);
// v54 = .unknown
v54[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
