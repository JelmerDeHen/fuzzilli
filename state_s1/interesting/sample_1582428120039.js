function main() {
const v1 = [1000000000000.0,1000000000000.0,1000000000000.0];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = new Uint8ClampedArray(37282);
// v7 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
v7.__proto__ = v1;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v11(v12,v13,v14,v15) {
    'use strict'
    function v16(v17,v18,v19,v20,v21) {
    }
    let v24 = 0;
    do {
        const v25 = v24 + 1;
        // v25 = .primitive
        v24 = v25;
    } while (v24 < 3);
    const v26 = v1.every(v16);
    // v26 = .boolean
    try {
        v15[3] = v15;
    } catch(v27) {
    }
}
const v28 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
// v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "set", "call", "setPrototypeOf", "construct", "get", "isExtensible", "has", "ownKeys", "getPrototypeOf", "preventExtensions"])
const v30 = new Proxy(v10,v28);
// v30 = .unknown
v30[1] = "prototype";
}
%NeverOptimizeFunction(main);
main();
