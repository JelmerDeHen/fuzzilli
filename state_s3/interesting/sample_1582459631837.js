function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v10(v11,v12,v13,v14) {
    'use strict'
    return v1;
}
const v15 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "get", "call", "deleteProperty", "ownKeys", "getPrototypeOf", "has", "setPrototypeOf", "isExtensible", "construct"])
const v17 = new Proxy(v9,v15);
// v17 = .unknown
const v18 = v10(v17,v17,1337,"number");
// v18 = .unknown
for (const v20 in "boolean") {
    function v21(v22,v23) {
        const v24 = v22 in v21;
        // v24 = .boolean
        return v20;
    }
    const v28 = v21(0);
    // v28 = .unknown
    const v31 = new Int16Array(356129317);
    // v31 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
    v18[938358185] = v5;
    const v33 = {...null};
    // v33 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v34 = {set:v17,getPrototypeOf:v10,ownKeys:v17,preventExtensions:Number,get:Number,getOwnPropertyDescriptor:v21,call:Promise,construct:Promise,deleteProperty:v28};
    // v34 = .object(ofGroup: Object, withProperties: ["construct", "__proto__", "ownKeys", "deleteProperty", "call", "set"], withMethods: ["preventExtensions", "getPrototypeOf", "getOwnPropertyDescriptor", "get"])
}
}
%NeverOptimizeFunction(main);
main();
