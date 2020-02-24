function main() {
function v0(v1,v2) {
    const v4 = Math.fround(v1);
    // v4 = .number
    const v6 = v4 === 0;
    // v6 = .boolean
}
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v12(v13,v14,v15,v16) {
    'use strict'
    const v20 = [13.37,13.37,13.37];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v21(v22,v23) {
        delete arguments[100];
    }
    const v26 = ["undefined",v20];
    // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v28 = new Int16Array(100);
    // v28 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
    const v29 = v21(v26,...v28);
    // v29 = .unknown
}
const v30 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "set", "call", "construct", "isExtensible", "deleteProperty", "ownKeys", "get", "has", "preventExtensions", "getPrototypeOf"])
const v32 = new Proxy(v11,v30);
// v32 = .unknown
v32[1] = "MIN_VALUE";
let v37 = 0;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
let v42 = 0;
const v43 = v42 + 1;
// v43 = .primitive
v42 = v43;
}
%NeverOptimizeFunction(main);
main();
