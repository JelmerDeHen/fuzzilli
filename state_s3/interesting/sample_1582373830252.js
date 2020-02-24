function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v8) {
        const v10 = ["__proto__"];
        // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v12 = [13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v14 = {};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v19 = [2153514987,13.37,13.37,13.37,v12];
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v12};
        // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "length"])
        const v22 = {e:1337,toString:v14,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
        // v22 = .object(ofGroup: Object, withProperties: ["b", "c", "e", "toString", "valueOf", "__proto__", "constructor"])
        const v23 = JSON.stringify(v22,v10,"name");
        // v23 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    }
}
const v24 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:1337,has:v3};
// v24 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["set", "isExtensible", "call", "preventExtensions", "deleteProperty", "get", "has", "ownKeys", "construct", "getPrototypeOf"])
const v26 = new Proxy(v2,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
