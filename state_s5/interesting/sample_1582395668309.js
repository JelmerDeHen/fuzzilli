function main() {
for (const v2 in "object") {
    for (const v4 in "boolean") {
        function v6(v7,v8,v9,v10) {
            'use strict'
        }
        const v11 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
        // v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "setPrototypeOf", "set", "ownKeys", "getPrototypeOf", "get", "has", "construct", "isExtensible", "deleteProperty", "call"])
        const v13 = new Array(Set,v11);
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        v13[1000] = "MIN_VALUE";
    }
}
}
%NeverOptimizeFunction(main);
main();
