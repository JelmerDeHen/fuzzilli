function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
            // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            let v19 = v18;
            const v21 = Math.acosh(v19);
            // v21 = .number
        }
        return v4;
    }
    const v22 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "preventExtensions", "ownKeys", "setPrototypeOf", "has", "call", "isExtensible", "deleteProperty", "get", "construct", "set"])
    const v24 = new Proxy(v4,v22);
    // v24 = .unknown
    v24[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
