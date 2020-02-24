function main() {
const v2 = new Int8Array(16043);
// v2 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1073741824,1073741824,v4];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v10(v11,v12,v13,v14) {
    'use strict'
    const v17 = new Uint8Array(1337);
    // v17 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "includes", "every", "reduceRight", "find", "filter", "lastIndexOf", "indexOf", "subarray", "join", "fill", "sort", "slice", "findIndex", "reverse", "forEach", "reduce", "values", "copyWithin", "entries", "keys", "set", "some"])
    const v19 = [1337,1337,1337,1337];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v20 = {valueOf:v19};
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
    const v22 = {e:v20,d:"d"};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e"])
    function v23(v24,v25) {
        let v29 = -128;
        while (v29 < 5) {
            const v30 = v22 <= 0;
            // v30 = .boolean
            const v31 = v29 + 1;
            // v31 = .primitive
            const v32 = v30 & v29;
            // v32 = .integer
            v29 = v31;
            v17[64] = v32;
        }
    }
    const v34 = [9007199254740993];
    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v35 = v34;
    const v36 = v23(v35);
    // v36 = .unknown
}
const v37 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "getPrototypeOf", "setPrototypeOf", "isExtensible", "set", "ownKeys", "deleteProperty", "preventExtensions", "has", "call", "construct"])
const v39 = new Proxy(v9,v37);
// v39 = .unknown
v39[1] = "MIN_VALUE";
let v41 = 0;
const v42 = v41 > v10;
// v42 = .boolean
const v43 = v10();
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
