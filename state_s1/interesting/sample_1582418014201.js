function main() {
for (const v1 in "object") {
    const v5 = [1337,1337,1337,1337,1337];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    function v6(v7,v8,v9,v10) {
        'use strict'
        try {
            v10[3] = v10;
        } catch(v11) {
            const v12 = v10 instanceof Uint32Array;
            // v12 = .boolean
            const v14 = v12 % 3890419937;
            // v14 = .number
            const v15 = [v14];
            // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        }
        return v5;
    }
    const v16 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "ownKeys", "construct", "call", "preventExtensions", "set", "setPrototypeOf", "has", "getPrototypeOf", "isExtensible", "get"])
    const v18 = new Proxy(v5,v16);
    // v18 = .unknown
    v18[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
