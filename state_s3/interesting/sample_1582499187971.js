function main() {
const v1 = [5.0,5.0,5.0,5.0];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v2(v3,v4) {
    const v7 = [13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v8(v9,v10) {
        const v14 = [13.37,13.37,13.37];
        // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v16 = [1337,1337,1337,1337,1337];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        function v17(v18,v19,v20,v21) {
            'use strict'
            return v20;
        }
        const v22 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v14,isExtensible:v17,construct:v17,get:v17,ownKeys:v3,setPrototypeOf:v17,has:v17};
        // v22 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys", "preventExtensions"], withMethods: ["deleteProperty", "setPrototypeOf", "set", "has", "get", "getPrototypeOf", "isExtensible", "call", "construct"])
        const v24 = new Proxy(v16,v22);
        // v24 = .unknown
        const v25 = String.raw(v24,parseFloat,String);
        // v25 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    }
    const v31 = new Int8Array("arguments");
    // v31 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
    const v33 = new Map(v31);
    // v33 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["set", "get", "keys", "entries", "forEach", "clear", "values", "delete", "has"])
    const v34 = v33.values(v31);
    // v34 = .object()
    const v35 = ["nVkEIOUd+c",13.37];
    // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
