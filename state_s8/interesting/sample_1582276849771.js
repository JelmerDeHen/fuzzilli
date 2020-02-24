function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v16 = [];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v17 = {valueOf:v16,length:796723.1608468755,d:127,e:127};
        // v17 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "length", "e", "__proto__"])
        const v18 = {c:v16,valueOf:v17,d:Array,a:1337};
        // v18 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "__proto__", "a"], withMethods: ["d"])
        const v24 = [];
        // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v31 = {length:"pvU0UUjoya",valueOf:v18,...2258530742,...v9,..."name",...v24};
        // v31 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "valueOf"], withMethods: ["substring", "some", "codePointAt", "slice", "push", "padEnd", "find", "every", "shift", "split", "concat", "reverse", "flatMap", "flat", "replace", "reduce", "map", "charCodeAt", "toLocaleString", "startsWith", "splice", "repeat", "pop", "filter", "values", "trim", "includes", "endsWith", "join", "reduceRight", "indexOf", "findIndex", "charAt", "copyWithin", "padStart", "lastIndexOf", "entries", "unshift", "keys", "forEach", "fill", "toString", "sort"])
    } catch(v43) {
    }
    return v1;
}
const v44 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "set", "call", "has", "isExtensible", "construct", "preventExtensions", "setPrototypeOf", "get", "getPrototypeOf", "deleteProperty"])
const v46 = new Proxy(v4,v44);
// v46 = .unknown
v46[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
