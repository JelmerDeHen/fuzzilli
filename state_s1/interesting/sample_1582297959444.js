function main() {
const v2 = {e:1337};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
const v5 = [-2637407539,-2637407539,-2637407539,-2637407539,-2637407539];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v6(v7,v8,v9,v10) {
    'use strict'
    let v12 = 13.37;
    try {
        const v15 = new Float32Array(19873);
        // v15 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "constructor", "__proto__", "buffer", "byteOffset", "length"], withMethods: ["entries", "sort", "fill", "some", "reduceRight", "map", "values", "includes", "copyWithin", "reverse", "indexOf", "filter", "findIndex", "find", "every", "set", "keys", "subarray", "reduce", "slice", "forEach", "join", "lastIndexOf"])
        v10[3] = v10;
    } catch(v16) {
        const v18 = [-2008211595];
        // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v19 = {valueOf:v18};
        // v19 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
        const v22 = new ArrayBuffer(1337);
        // v22 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
        const v24 = v22.slice(v2,1337);
        // v24 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    }
}
const v25 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:-1,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["set", "construct", "deleteProperty", "isExtensible", "getPrototypeOf", "setPrototypeOf", "call", "ownKeys", "preventExtensions", "has"])
const v27 = new Proxy(v5,v25);
// v27 = .unknown
v27[1] = "toString";
}
%NeverOptimizeFunction(main);
main();
