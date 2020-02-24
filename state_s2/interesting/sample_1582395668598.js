function main() {
for (const v2 in "object") {
    for (const v4 in "boolean") {
        function v6(v7,v8,v9,v10) {
            'use strict'
        }
        const v11 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
        // v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "deleteProperty", "getPrototypeOf", "set", "setPrototypeOf", "ownKeys", "has", "call", "get", "isExtensible", "construct"])
        const v13 = new Array(Set,v11);
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        v13[1000] = "MIN_VALUE";
    }
}
}
%NeverOptimizeFunction(main);
main();
