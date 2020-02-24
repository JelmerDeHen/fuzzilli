function main() {
function v0(v1,v2,v3,v4) {
    'use strict'
    try {
        const v6 = [371375.4036167406,371375.4036167406,371375.4036167406];
        // v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v9 = [13.37,13.37];
        // v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v10 = v9[1024];
        // v10 = .unknown
        const v11 = {has:gc,construct:v10,defineProperty:v10,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v10,isExtensible:v10,call:v10,set:gc,getOwnPropertyDescriptor:gc};
        // v11 = .object(ofGroup: Object, withProperties: ["call", "__proto__", "isExtensible", "preventExtensions", "defineProperty", "construct"], withMethods: ["set", "deleteProperty", "has", "setPrototypeOf", "getOwnPropertyDescriptor"])
        const v13 = new Proxy(v9,v11);
        // v13 = .unknown
        for (const v15 in "object") {
            v6.__proto__ = v13;
        }
    } catch(v17) {
    }
}
const v21 = v0(Reflect,Reflect,1337,9007199254740993);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
