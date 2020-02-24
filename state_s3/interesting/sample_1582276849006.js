function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v16 = [];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v17 = {valueOf:v16,length:796723.1608468755,d:127,e:127};
        // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e", "length", "valueOf"])
        const v18 = {c:v16,valueOf:v17,d:Array,a:1337};
        // v18 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c", "valueOf"], withMethods: ["d"])
        const v24 = [];
        // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v31 = {length:"pvU0UUjoya",valueOf:v18,...2258530742,...v9,..."name",...v24};
        // v31 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "valueOf"], withMethods: ["toLocaleString", "split", "map", "pop", "padEnd", "find", "reduceRight", "flat", "lastIndexOf", "concat", "entries", "flatMap", "forEach", "fill", "sort", "reduce", "every", "keys", "trim", "endsWith", "codePointAt", "findIndex", "unshift", "charAt", "shift", "splice", "substring", "startsWith", "some", "indexOf", "filter", "slice", "copyWithin", "replace", "reverse", "toString", "includes", "values", "join", "padStart", "charCodeAt", "repeat", "push"])
    } catch(v43) {
    }
    return v1;
}
const v44 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "isExtensible", "setPrototypeOf", "get", "has", "preventExtensions", "getPrototypeOf", "construct", "call", "set", "deleteProperty"])
const v46 = new Proxy(v4,v44);
// v46 = .unknown
v46[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
