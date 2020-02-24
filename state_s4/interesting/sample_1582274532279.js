function main() {
let v3 = 0;
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v11 = [13.37,13.37];
        // v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v12 = v11[1024];
        // v12 = .unknown
        const v13 = {has:gc,construct:v12,defineProperty:v12,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v12,isExtensible:v12,call:v12,set:gc,getOwnPropertyDescriptor:gc};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "defineProperty", "call", "isExtensible", "preventExtensions", "construct"], withMethods: ["set", "setPrototypeOf", "has", "deleteProperty", "getOwnPropertyDescriptor"])
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
