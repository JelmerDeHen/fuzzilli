function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v3(v4,v5,v6,v7) {
    'use strict'
    let v10 = 0;
    while (v10 < 1337) {
        const v11 = v10 + 1;
        // v11 = .primitive
        v10 = v11;
        let v14 = v11;
        const v15 = Math.hypot(v14,13.37);
        // v15 = .number
        const v18 = [1337,Infinity,Infinity];
        // v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v19 = [v15,v18];
        // v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    }
}
const v20 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,length:v3,has:v3};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "isExtensible", "get", "getPrototypeOf", "call", "ownKeys", "set", "preventExtensions", "length", "deleteProperty", "has"])
const v22 = new Proxy(v2,v20);
// v22 = .unknown
v22[3] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
