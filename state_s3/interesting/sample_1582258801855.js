function main() {
function v0(v1,v2,v3,v4) {
    'use strict'
    try {
        const v6 = [371375.4036167406,371375.4036167406,371375.4036167406];
        // v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v10 = new Int16Array(19873);
        // v10 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
        for (const v11 of v10) {
        }
        const v13 = [13.37,13.37];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v14 = v13[1024];
        // v14 = .unknown
        const v15 = {has:gc,construct:v14,defineProperty:v14,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v14,isExtensible:v14,call:v14,set:gc,getOwnPropertyDescriptor:gc};
        // v15 = .object(ofGroup: Object, withProperties: ["defineProperty", "construct", "preventExtensions", "isExtensible", "__proto__", "call"], withMethods: ["has", "deleteProperty", "set", "getOwnPropertyDescriptor", "setPrototypeOf"])
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
