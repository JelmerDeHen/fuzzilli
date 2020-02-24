function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [-934911719,13.37,-934911719];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {__proto__:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {toString:v6,length:v8,c:"function",a:13.37,d:v4};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "a", "toString", "c", "d"])
let v10 = v6;
const v12 = [1337,1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v13(v14,v15) {
    const v18 = [1337,1337,1337,1337,1337];
    // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    function v19(v20,v21,v22,v23) {
        'use strict'
        try {
            v23[3] = v23;
        } catch(v24) {
            const v26 = [1337,v18];
            // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v33 = new Uint8ClampedArray(8);
            // v33 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteLength", "__proto__", "buffer", "length", "byteOffset"], withMethods: ["slice", "reduceRight", "findIndex", "every", "copyWithin", "set", "fill", "sort", "forEach", "entries", "join", "values", "keys", "map", "reverse", "indexOf", "subarray", "reduce", "find", "includes", "lastIndexOf", "filter", "some"])
            const v34 = new Uint32Array(v33);
            // v34 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "__proto__", "byteLength", "byteOffset", "constructor"], withMethods: ["includes", "forEach", "every", "some", "subarray", "lastIndexOf", "values", "copyWithin", "findIndex", "reverse", "sort", "keys", "filter", "join", "indexOf", "reduce", "reduceRight", "set", "slice", "find", "fill", "map", "entries"])
            const v37 = Function(v19);
            // v37 = .unknown
        }
    }
    const v38 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
    // v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "deleteProperty", "set", "isExtensible", "call", "preventExtensions", "get", "setPrototypeOf", "ownKeys", "construct", "getPrototypeOf"])
    const v40 = new Proxy(v18,v38);
    // v40 = .unknown
    v40[1] = "MIN_VALUE";
    for (const v42 in "boolean") {
        let v45 = 0;
        do {
            const v46 = v45 + 1;
            // v46 = .primitive
            v45 = v46;
        } while (v45 < 7);
    }
    return v15;
}
const v47 = v12.forEach(v13);
// v47 = .undefined
}
%NeverOptimizeFunction(main);
main();
