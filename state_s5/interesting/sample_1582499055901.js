function main() {
const v1 = [5.0,5.0,5.0,5.0];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v2(v3,v4) {
    const v7 = [13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v8(v9,v10) {
        const v14 = [13.37,13.37,13.37];
        // v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v16 = [1337,1337,1337,1337,1337];
        // v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        function v17(v18,v19,v20,v21) {
            'use strict'
            return v20;
        }
        const v22 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v14,isExtensible:v17,construct:v17,get:v17,ownKeys:v3,setPrototypeOf:v17,has:v17};
        // v22 = .object(ofGroup: Object, withProperties: ["preventExtensions", "ownKeys", "__proto__"], withMethods: ["call", "construct", "set", "isExtensible", "get", "setPrototypeOf", "getPrototypeOf", "deleteProperty", "has"])
        const v24 = new Proxy(v16,v22);
        // v24 = .unknown
        const v25 = String.raw(v24,parseFloat,String);
        // v25 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    }
    const v31 = new Int8Array("arguments");
    // v31 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
    const v33 = new Map(v31);
    // v33 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["get", "clear", "forEach", "delete", "keys", "values", "has", "entries", "set"])
    const v34 = v33.values(v31);
    // v34 = .object()
    const v35 = ["nVkEIOUd+c",13.37];
    // v35 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v36 = {b:v35};
    // v36 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    const v37 = new Promise(v8,v36,"undefined",v7,"undefined");
    // v37 = .object()
    let v40 = 0;
    const v41 = v40 + 1;
    // v41 = .primitive
    v40 = v41;
}
const v42 = v1.sort(v2);
// v42 = .undefined
}
%NeverOptimizeFunction(main);
main();
