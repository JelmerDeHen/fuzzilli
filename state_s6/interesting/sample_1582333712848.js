function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v11 = Array.isArray(v2);
        // v11 = .boolean
        let v14 = 0;
        while (v14 < 3) {
            let v17 = 0;
            const v18 = v17 + 1;
            // v18 = .primitive
            v17 = v18;
            const v19 = v14 + 1;
            // v19 = .primitive
            v14 = v19;
        }
        v10[3] = v10;
    } catch(v20) {
    }
}
const v21 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,c:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "set", "c", "setPrototypeOf", "getPrototypeOf", "construct", "isExtensible", "has", "deleteProperty", "preventExtensions", "get"])
const v23 = new Proxy(v5,v21);
// v23 = .unknown
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
