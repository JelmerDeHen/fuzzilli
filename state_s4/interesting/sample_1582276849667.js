function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v16 = [];
        // v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v17 = {valueOf:v16,length:796723.1608468755,d:127,e:127};
        // v17 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "length", "e", "valueOf"])
        const v18 = {c:v16,valueOf:v17,d:Array,a:1337};
        // v18 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__", "valueOf"], withMethods: ["d"])
        const v24 = [];
        // v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v31 = {length:"pvU0UUjoya",valueOf:v18,...2258530742,...v9,..."name",...v24};
        // v31 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf", "constructor"], withMethods: ["entries", "find", "toLocaleString", "charAt", "join", "endsWith", "keys", "concat", "substring", "map", "splice", "flatMap", "unshift", "sort", "push", "reduceRight", "trim", "includes", "startsWith", "indexOf", "split", "pop", "values", "lastIndexOf", "some", "padEnd", "reverse", "filter", "slice", "toString", "forEach", "reduce", "fill", "findIndex", "flat", "every", "repeat", "codePointAt", "replace", "padStart", "copyWithin", "shift", "charCodeAt"])
    } catch(v43) {
    }
    return v1;
}
const v44 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "construct", "get", "call", "preventExtensions", "getPrototypeOf", "ownKeys", "deleteProperty", "setPrototypeOf", "has", "isExtensible"])
const v46 = new Proxy(v4,v44);
// v46 = .unknown
v46[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
