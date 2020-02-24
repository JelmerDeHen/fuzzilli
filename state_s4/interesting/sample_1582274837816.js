function main() {
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v12 = typeof v6;
        // v12 = .string
        const v14 = v12 === "symbol";
        // v14 = .boolean
        let v17 = 0;
        while (v17 < 7) {
            const v18 = v17 + 1;
            // v18 = .primitive
            v17 = v18;
        }
        v10[v14] = 0;
    } catch(v19) {
    }
}
const v20 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "deleteProperty", "preventExtensions", "isExtensible", "has", "set", "call", "setPrototypeOf", "ownKeys", "getPrototypeOf", "get"])
const v22 = new Proxy(v5,v20);
// v22 = .unknown
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
