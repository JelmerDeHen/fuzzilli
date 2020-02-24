function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v16 = [];
        // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v17 = {valueOf:v16,length:796723.1608468755,d:127,e:127};
        // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf", "e", "d"])
        const v18 = {c:v16,valueOf:v17,d:Array,a:1337};
        // v18 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "a", "valueOf"], withMethods: ["d"])
        const v24 = [];
        // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v31 = {length:"pvU0UUjoya",valueOf:v18,...2258530742,...v9,..."name",...v24};
        // v31 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "constructor", "__proto__"], withMethods: ["toString", "shift", "unshift", "entries", "includes", "trim", "reduce", "charCodeAt", "push", "every", "concat", "slice", "toLocaleString", "fill", "map", "padStart", "pop", "findIndex", "splice", "indexOf", "startsWith", "codePointAt", "lastIndexOf", "find", "replace", "forEach", "sort", "copyWithin", "join", "split", "reverse", "reduceRight", "filter", "padEnd", "substring", "repeat", "endsWith", "some", "flat", "values", "flatMap", "charAt", "keys"])
    } catch(v43) {
    }
    return v1;
}
const v44 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "set", "construct", "get", "ownKeys", "deleteProperty", "setPrototypeOf", "has", "isExtensible", "getPrototypeOf", "preventExtensions"])
const v46 = new Proxy(v4,v44);
// v46 = .unknown
v46[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
