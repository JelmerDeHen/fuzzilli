function main() {
for (const v1 in "object") {
    const v4 = [1337,v1,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            let v12 = 0;
            const v13 = v12 + 1;
            // v13 = .primitive
            const v15 = 2.2250738585072014e-308 / v13;
            // v15 = .number
            const v16 = [v15];
            // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        }
        return v4;
    }
    const v17 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "construct", "call", "isExtensible", "get", "deleteProperty", "preventExtensions", "set", "ownKeys", "has", "getPrototypeOf"])
    const v19 = new Proxy(v4,v17);
    // v19 = .unknown
    v19[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
