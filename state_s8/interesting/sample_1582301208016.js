function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        v1.__proto__ = v10;
        const v13 = [13.37,13.37];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v14 = v13[1024];
        // v14 = .unknown
        const v15 = {has:gc,construct:v14,defineProperty:v14,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v14,isExtensible:v14,call:v14,set:gc,getOwnPropertyDescriptor:gc};
        // v15 = .object(ofGroup: Object, withProperties: ["preventExtensions", "defineProperty", "__proto__", "isExtensible", "call", "construct"], withMethods: ["has", "deleteProperty", "getOwnPropertyDescriptor", "setPrototypeOf", "set"])
        const v17 = Proxy(v13,v15);
        // v17 = .unknown
        const v27 = [1337];
        // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        let v28 = v27;
        let v30 = undefined;
        let v33 = 0;
        let v36 = 0;
    } catch(v43) {
    }
}
const v44 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "getPrototypeOf", "setPrototypeOf", "isExtensible", "get", "set", "construct", "preventExtensions", "call", "deleteProperty", "has"])
const v46 = new Proxy(v5,v44);
// v46 = .unknown
v46[1] = "MIN_VALUE";
const v48 = new Float64Array(v2);
// v48 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
}
%NeverOptimizeFunction(main);
main();
