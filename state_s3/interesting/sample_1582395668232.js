function main() {
for (const v2 in "object") {
    for (const v4 in "boolean") {
        function v6(v7,v8,v9,v10) {
            'use strict'
        }
        const v11 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
        // v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "has", "isExtensible", "ownKeys", "setPrototypeOf", "get", "preventExtensions", "call", "deleteProperty", "construct", "set"])
        const v13 = new Array(Set,v11);
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        v13[1000] = "MIN_VALUE";
    }
}
}
%NeverOptimizeFunction(main);
main();
