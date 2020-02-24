function main() {
for (const v2 in "object") {
    const v5 = [1337,1337,1337,1337,1337];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v6(v7,v8,v9,v10) {
        'use strict'
        try {
            const v13 = new Float32Array(19873);
            // v13 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
            v10[3] = v10;
        } catch(v14) {
            const v16 = [1337,1337];
            // v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v21 = "unscopable".concat(100);
            // v21 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
            const v22 = [-372074.99096011615,v16,-372074.99096011615];
            // v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v23 = Function(v22);
            // v23 = .unknown
        }
        return v5;
    }
    const v24 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
    // v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "preventExtensions", "isExtensible", "construct", "get", "setPrototypeOf", "deleteProperty", "getPrototypeOf", "set", "has", "ownKeys"])
    const v26 = new Proxy(v5,v24);
    // v26 = .unknown
    v26[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
