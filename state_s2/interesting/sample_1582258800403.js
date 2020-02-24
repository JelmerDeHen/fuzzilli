function main() {
function v0(v1,v2,v3,v4) {
    'use strict'
    try {
        const v6 = [371375.4036167406,371375.4036167406,371375.4036167406];
        // v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v10 = new Int16Array(19873);
        // v10 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
        for (const v11 of v10) {
        }
        const v13 = [13.37,13.37];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v14 = v13[1024];
        // v14 = .unknown
        const v15 = {has:gc,construct:v14,defineProperty:v14,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v14,isExtensible:v14,call:v14,set:gc,getOwnPropertyDescriptor:gc};
        // v15 = .object(ofGroup: Object, withProperties: ["defineProperty", "call", "construct", "isExtensible", "preventExtensions", "__proto__"], withMethods: ["deleteProperty", "getOwnPropertyDescriptor", "set", "setPrototypeOf", "has"])
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
