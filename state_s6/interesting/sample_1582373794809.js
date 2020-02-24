function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v8) {
        const v10 = ["__proto__"];
        // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v12 = [13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v14 = {};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v19 = [2153514987,13.37,13.37,13.37,v12];
        // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v12};
        // v21 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "length", "valueOf"])
        const v22 = {e:1337,toString:v14,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
        // v22 = .object(ofGroup: Object, withProperties: ["constructor", "c", "valueOf", "toString", "__proto__", "b", "e"])
        const v23 = JSON.stringify(v22,v10,"name");
        // v23 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    }
}
const v24 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:1337,has:v3};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["call", "get", "construct", "ownKeys", "getPrototypeOf", "deleteProperty", "isExtensible", "has", "set", "preventExtensions"])
const v26 = new Proxy(v2,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
