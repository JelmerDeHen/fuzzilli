function main() {
function v0(v1,v2,v3,v4) {
    'use strict'
    try {
        const v6 = [371375.4036167406,371375.4036167406,371375.4036167406];
        // v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v10 = new Int16Array(19873);
        // v10 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
        for (const v11 of v10) {
        }
        const v13 = [13.37,13.37];
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v14 = v13[1024];
        // v14 = .unknown
        const v15 = {has:gc,construct:v14,defineProperty:v14,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v14,isExtensible:v14,call:v14,set:gc,getOwnPropertyDescriptor:gc};
        // v15 = .object(ofGroup: Object, withProperties: ["call", "__proto__", "construct", "isExtensible", "defineProperty", "preventExtensions"], withMethods: ["has", "set", "deleteProperty", "getOwnPropertyDescriptor", "setPrototypeOf"])
        const v17 = new Proxy(v13,v15);
        // v17 = .unknown
        for (const v19 in "object") {
            v6.__proto__ = v17;
        }
    } catch(v20) {
    }
}
const v24 = v0(Reflect,Reflect,1337,9007199254740993);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
