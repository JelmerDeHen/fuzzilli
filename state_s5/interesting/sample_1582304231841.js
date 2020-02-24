function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [3,3,3];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [13.37,-4277543386];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {length:Object,a:3,e:13.37,toString:v4,c:v7,__proto__:v7};
// v8 = .object(ofGroup: Object, withProperties: ["e", "c", "__proto__", "a", "toString"], withMethods: ["length"])
const v9 = {toString:13.37,c:13.37,a:v8};
// v9 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__", "toString"])
let v10 = v7;
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        const v20 = {};
        // v20 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v21 = v20;
        const v26 = [2153514987,13.37,13.37,13.37,v18];
        // v26 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v28 = [v21,v26,v26];
        // v28 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v29 = {toString:13.37,b:"SJlLk2U6S0",valueOf:v13,__proto__:v28};
        // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "toString"])
        const v30 = {a:1337,toString:v15,constructor:"SJlLk2U6S0",valueOf:v29,b:13.37,c:JSON,e:JSON};
        // v30 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "toString", "e", "constructor", "__proto__", "a", "b"])
        const v32 = JSON.stringify(v30,Array,"FUF8WgskTX");
        // v32 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    } catch(v33) {
    }
    return v9;
}
const v34 = Object.prototype;
// v34 = .object()
v13.length = 0;
v8[v4] = v6;
const v36 = !v9;
// v36 = .boolean
const v37 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
// v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "call", "construct", "has", "deleteProperty", "isExtensible", "setPrototypeOf", "preventExtensions", "get", "getPrototypeOf", "ownKeys"])
const v39 = new Proxy(v13,v37);
// v39 = .unknown
v39[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
