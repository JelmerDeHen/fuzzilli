function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {length:1337,e:1337,c:v2,a:1337,toString:"symbol"};
// v3 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c", "length", "e", "toString"])
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        const v16 = {};
        // v16 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v17 = v16;
        const v22 = [2153514987,13.37,13.37,13.37,v14];
        // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v24 = [v17,v22,v22];
        // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v25 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v22,__proto__:v24};
        // v25 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "b", "__proto__"])
        const v26 = {a:1337,toString:v16,constructor:"NEGATIVE_INFINITY",valueOf:v25,b:13.37,c:JSON,e:JSON};
        // v26 = .object(ofGroup: Object, withProperties: ["e", "c", "b", "__proto__", "a", "constructor", "toString", "valueOf"])
        const v28 = JSON.stringify(v26,Reflect,"name");
        // v28 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    } catch(v29) {
    }
    return v3;
}
const v30 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "deleteProperty", "getPrototypeOf", "has", "ownKeys", "preventExtensions", "setPrototypeOf", "call", "get", "construct", "set"])
const v32 = new Proxy(v9,v30);
// v32 = .unknown
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
