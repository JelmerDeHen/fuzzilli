function main() {
let v3 = 0;
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v11 = [13.37,13.37];
        // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v12 = v11[1024];
        // v12 = .unknown
        const v13 = {has:gc,construct:v12,defineProperty:v12,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v12,isExtensible:v12,call:v12,set:gc,getOwnPropertyDescriptor:gc};
        // v13 = .object(ofGroup: Object, withProperties: ["call", "__proto__", "isExtensible", "defineProperty", "preventExtensions", "construct"], withMethods: ["getOwnPropertyDescriptor", "deleteProperty", "setPrototypeOf", "set", "has"])
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
