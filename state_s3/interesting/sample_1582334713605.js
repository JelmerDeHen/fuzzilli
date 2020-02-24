function main() {
for (const v1 in "object") {
    const v4 = [1337,v1,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
            // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        }
        return v4;
    }
    const v17 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "get", "ownKeys", "preventExtensions", "set", "getPrototypeOf", "call", "setPrototypeOf", "has", "isExtensible", "deleteProperty"])
    const v19 = new Proxy(v4,v17);
    // v19 = .unknown
    v19[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
