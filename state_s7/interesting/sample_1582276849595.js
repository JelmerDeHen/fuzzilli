function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v16 = [];
        // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v17 = {valueOf:v16,length:796723.1608468755,d:127,e:127};
        // v17 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__", "e", "d"])
        const v18 = {c:v16,valueOf:v17,d:Array,a:1337};
        // v18 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "c", "__proto__"], withMethods: ["d"])
        const v24 = [];
        // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v31 = {length:"pvU0UUjoya",valueOf:v18,...2258530742,...v9,..."name",...v24};
        // v31 = .object(ofGroup: Object, withProperties: ["constructor", "length", "valueOf", "__proto__"], withMethods: ["concat", "filter", "pop", "forEach", "reverse", "fill", "splice", "includes", "startsWith", "flatMap", "toLocaleString", "some", "padEnd", "repeat", "join", "entries", "values", "slice", "reduce", "flat", "indexOf", "reduceRight", "lastIndexOf", "substring", "trim", "endsWith", "padStart", "keys", "replace", "charCodeAt", "codePointAt", "toString", "find", "shift", "unshift", "every", "sort", "split", "copyWithin", "findIndex", "charAt", "push", "map"])
    } catch(v43) {
    }
    return v1;
}
const v44 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "ownKeys", "deleteProperty", "has", "set", "isExtensible", "get", "setPrototypeOf", "call", "getPrototypeOf", "preventExtensions"])
const v46 = new Proxy(v4,v44);
// v46 = .unknown
v46[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
