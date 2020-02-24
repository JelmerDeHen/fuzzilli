function main() {
let v3 = 0;
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v11 = [13.37,13.37];
        // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v12 = v11[1024];
        // v12 = .unknown
        const v13 = {has:gc,construct:v12,defineProperty:v12,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v12,isExtensible:v12,call:v12,set:gc,getOwnPropertyDescriptor:gc};
        // v13 = .object(ofGroup: Object, withProperties: ["preventExtensions", "construct", "isExtensible", "call", "__proto__", "defineProperty"], withMethods: ["setPrototypeOf", "has", "set", "getOwnPropertyDescriptor", "deleteProperty"])
        const v15 = new Proxy(v11,v13);
        // v15 = .unknown
        delete v15[558351006];
    } catch(v17) {
    }
}
const v21 = v4(Reflect,Reflect,1337,9007199254740993);
// v21 = .unknown
const v22 = v3 + 1;
// v22 = .primitive
v3 = v22;
}
%NeverOptimizeFunction(main);
main();
