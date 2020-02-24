function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v10(v11,v12,v13,v14) {
    'use strict'
    return v1;
}
const v15 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "has", "deleteProperty", "construct", "setPrototypeOf", "getPrototypeOf", "preventExtensions", "ownKeys", "isExtensible", "call", "set"])
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
    // v31 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
    v18[938358185] = v5;
    const v33 = {...null};
    // v33 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v34 = {set:v17,getPrototypeOf:v10,ownKeys:v17,preventExtensions:Number,get:Number,getOwnPropertyDescriptor:v21,call:Promise,construct:Promise,deleteProperty:v28};
    // v34 = .object(ofGroup: Object, withProperties: ["__proto__", "deleteProperty", "ownKeys", "call", "construct", "set"], withMethods: ["get", "getPrototypeOf", "preventExtensions", "getOwnPropertyDescriptor"])
}
}
%NeverOptimizeFunction(main);
main();
