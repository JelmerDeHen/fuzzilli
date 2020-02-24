function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            let v11 = -65537;
            const v14 = new Uint32Array(128);
            // v14 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
            const v16 = new Float32Array(v9);
            // v16 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
            v9[3] = v9;
        } catch(v17) {
            const v18 = v4.reduceRight(v5,v7);
            // v18 = .unknown
        }
        return v4;
    }
    let v21 = 0;
    while (v21 < 1337) {
        const v22 = v21 + 1;
        // v22 = .primitive
        v21 = v22;
    }
    const v23 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:1337,has:v5};
    // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["getPrototypeOf", "has", "ownKeys", "set", "preventExtensions", "deleteProperty", "isExtensible", "construct", "get", "call"])
    const v25 = new Proxy(v4,v23);
    // v25 = .unknown
    v25[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
