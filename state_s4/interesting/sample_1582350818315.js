function main() {
function v0(v1,v2) {
    const v4 = Math.fround(v1);
    // v4 = .number
    const v6 = v4 === 0;
    // v6 = .boolean
}
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v12(v13,v14,v15,v16) {
    'use strict'
    const v20 = [13.37,13.37,13.37];
    // v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v21(v22,v23) {
        delete arguments[100];
    }
    const v26 = ["undefined",v20];
    // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v28 = new Int16Array(100);
    // v28 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
    const v29 = v21(v26,...v28);
    // v29 = .unknown
}
const v30 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "setPrototypeOf", "preventExtensions", "has", "call", "deleteProperty", "isExtensible", "get", "construct", "set", "ownKeys"])
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
