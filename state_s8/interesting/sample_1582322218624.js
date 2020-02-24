function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            let v13 = 0;
            const v14 = v13 + 1;
            // v14 = .primitive
            v13 = v14;
            const v17 = 2.2250738585072014e-308 / 3890419937;
            // v17 = .number
            const v18 = [v17];
            // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            let v19 = v18;
            const v21 = Math.acosh(v19);
            // v21 = .number
        }
        return v4;
    }
    const v22 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "isExtensible", "ownKeys", "preventExtensions", "call", "deleteProperty", "setPrototypeOf", "has", "set", "get", "getPrototypeOf"])
    const v24 = new Proxy(v4,v22);
    // v24 = .unknown
    v24[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
