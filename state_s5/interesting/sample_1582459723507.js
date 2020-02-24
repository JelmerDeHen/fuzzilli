function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v10(v11,v12,v13,v14) {
    'use strict'
    return v1;
}
const v15 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "deleteProperty", "ownKeys", "preventExtensions", "get", "set", "setPrototypeOf", "getPrototypeOf", "call", "construct", "has"])
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
    // v31 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
    v18[938358185] = v5;
    const v33 = {...null};
    // v33 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v34 = {set:v17,getPrototypeOf:v10,ownKeys:v17,preventExtensions:Number,get:Number,getOwnPropertyDescriptor:v21,call:Promise,construct:Promise,deleteProperty:v28};
    // v34 = .object(ofGroup: Object, withProperties: ["set", "__proto__", "deleteProperty", "call", "ownKeys", "construct"], withMethods: ["preventExtensions", "getOwnPropertyDescriptor", "getPrototypeOf", "get"])
}
}
%NeverOptimizeFunction(main);
main();
