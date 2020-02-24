function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            const v12 = [13.37,13.37,13.37];
            // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v14 = new Uint32Array(v12);
            // v14 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
            const v17 = [13.37,"boolean","boolean",13.37];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v20 = ["d",isFinite,isFinite,13.37];
            // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v21 = {has:isFinite,getOwnPropertyDescriptor:isFinite,setPrototypeOf:isFinite,call:isFinite,ownKeys:isFinite,isExtensible:isFinite,set:isFinite};
            // v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "setPrototypeOf", "isExtensible", "getOwnPropertyDescriptor", "set", "ownKeys", "has"])
            const v23 = new Proxy(v17,v21);
            // v23 = .unknown
            const v24 = v20.concat(v23,v14,13.37);
            // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        }
        return v4;
    }
    const v25 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "construct", "deleteProperty", "set", "has", "isExtensible", "call", "preventExtensions", "ownKeys", "setPrototypeOf", "getPrototypeOf"])
    const v27 = new Proxy(v4,v25);
    // v27 = .unknown
    v27[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
