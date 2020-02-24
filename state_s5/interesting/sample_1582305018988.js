function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            for (const v13 in "boolean") {
                const v15 = 13.37 << v13;
                // v15 = .integer
                let v16 = 0;
                const v17 = v16 != v15;
                // v17 = .boolean
                if (v17) {
                } else {
                }
            }
        }
        return v4;
    }
    const v20 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "deleteProperty", "preventExtensions", "ownKeys", "set", "call", "has", "getPrototypeOf", "get", "isExtensible", "setPrototypeOf"])
    const v22 = new Proxy(v4,v20);
    // v22 = .unknown
    v22[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
