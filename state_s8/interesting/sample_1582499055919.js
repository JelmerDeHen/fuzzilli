function main() {
const v1 = [5.0,5.0,5.0,5.0];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v2(v3,v4) {
    const v7 = [13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    function v8(v9,v10) {
        const v14 = [13.37,13.37,13.37];
        // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v16 = [1337,1337,1337,1337,1337];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        function v17(v18,v19,v20,v21) {
            'use strict'
            return v20;
        }
        const v22 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v14,isExtensible:v17,construct:v17,get:v17,ownKeys:v3,setPrototypeOf:v17,has:v17};
        // v22 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions", "ownKeys"], withMethods: ["getPrototypeOf", "set", "setPrototypeOf", "isExtensible", "deleteProperty", "call", "get", "construct", "has"])
        const v24 = new Proxy(v16,v22);
        // v24 = .unknown
        const v25 = String.raw(v24,parseFloat,String);
        // v25 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    }
    const v31 = new Int8Array("arguments");
    // v31 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
    const v33 = new Map(v31);
    // v33 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["has", "entries", "keys", "values", "get", "clear", "delete", "set", "forEach"])
    const v34 = v33.values(v31);
    // v34 = .object()
    const v35 = ["nVkEIOUd+c",13.37];
    // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v36 = {b:v35};
    // v36 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
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
