function main() {
for (const v2 in "object") {
    for (const v4 in "boolean") {
        function v6(v7,v8,v9,v10) {
            'use strict'
        }
        const v11 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
        // v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "isExtensible", "call", "preventExtensions", "ownKeys", "setPrototypeOf", "construct", "getPrototypeOf", "get", "deleteProperty", "set"])
        const v13 = new Array(Set,v11);
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        v13[1000] = "MIN_VALUE";
    }
}
}
%NeverOptimizeFunction(main);
main();
