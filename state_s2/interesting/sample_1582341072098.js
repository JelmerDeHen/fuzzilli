function main() {
for (const v1 in "object") {
    const v5 = [1337,1337,1337,1337,1337];
    // v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v6(v7,v8,v9,v10) {
        'use strict'
        try {
            v10[3] = v10;
        } catch(v11) {
            const v13 = [13.37,13.37,13.37];
            // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v14 = 1337 / v13;
            // v14 = .number
            const v15 = v10 instanceof Uint32Array;
            // v15 = .boolean
            const v18 = 2.2250738585072014e-308 % 3890419937;
            // v18 = .number
            const v19 = [v18];
            // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v20 = v19;
            const v22 = Math.acosh(v20);
            // v22 = .number
        }
        return v5;
    }
    const v23 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
    // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "getPrototypeOf", "construct", "call", "get", "isExtensible", "deleteProperty", "setPrototypeOf", "ownKeys", "has"])
    const v25 = new Proxy(v5,v23);
    // v25 = .unknown
    v25[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
