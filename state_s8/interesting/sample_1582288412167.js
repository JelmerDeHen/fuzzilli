function main() {
const v2 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v13 = [1.7976931348623157e+308];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v15 = [-140693494,-140693494,-140693494];
        // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v16 = {a:-140693494,toString:1.7976931348623157e+308,c:v13,__proto__:v15,valueOf:"object",constructor:"gM8oAednYn"};
        // v16 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "c", "a", "__proto__", "constructor"])
        const v17 = {toString:v13,valueOf:v16,d:-140693494,constructor:-9007199254740992};
        // v17 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "toString", "constructor", "__proto__"])
        const v18 = RegExp.apply(v17,RegExp);
        // v18 = .unknown
        const v19 = "object".split(v18,v7);
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    } catch(v20) {
    }
}
const v21 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "call", "deleteProperty", "ownKeys", "has", "preventExtensions", "construct", "set", "setPrototypeOf", "get", "isExtensible"])
const v23 = new Proxy(v2,v21);
// v23 = .unknown
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
