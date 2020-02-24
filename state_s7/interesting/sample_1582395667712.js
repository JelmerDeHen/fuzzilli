function main() {
for (const v2 in "object") {
    for (const v4 in "boolean") {
        function v6(v7,v8,v9,v10) {
            'use strict'
        }
        const v11 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
        // v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "ownKeys", "call", "get", "construct", "deleteProperty", "getPrototypeOf", "setPrototypeOf", "has", "isExtensible"])
        const v13 = new Array(Set,v11);
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        v13[1000] = "MIN_VALUE";
    }
}
}
%NeverOptimizeFunction(main);
main();
