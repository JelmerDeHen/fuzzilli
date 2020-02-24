function main() {
const v2 = {e:1337};
// v2 = .object(ofGroup: Object, withProperties: ["e", "__proto__"])
const v5 = [-2637407539,-2637407539,-2637407539,-2637407539,-2637407539];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v6(v7,v8,v9,v10) {
    'use strict'
    let v12 = 13.37;
    try {
        const v15 = new Float32Array(19873);
        // v15 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
        v10[3] = v10;
    } catch(v16) {
        const v18 = [-2008211595];
        // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v19 = {valueOf:v18};
        // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
        const v22 = new ArrayBuffer(1337);
        // v22 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
        const v24 = v22.slice(v2,1337);
        // v24 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    }
}
const v25 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:-1,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["setPrototypeOf", "construct", "set", "has", "ownKeys", "call", "deleteProperty", "getPrototypeOf", "preventExtensions", "isExtensible"])
const v27 = new Proxy(v5,v25);
// v27 = .unknown
v27[1] = "toString";
}
%NeverOptimizeFunction(main);
main();
