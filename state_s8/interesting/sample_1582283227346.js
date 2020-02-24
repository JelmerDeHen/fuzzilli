function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = {length:1337,e:1337,c:v2,a:1337,toString:"symbol"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "c", "e", "a", "toString"])
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        const v16 = {};
        // v16 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v17 = v16;
        const v22 = [2153514987,13.37,13.37,13.37,v14];
        // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v24 = [v17,v22,v22];
        // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v25 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v22,__proto__:v24};
        // v25 = .object(ofGroup: Object, withProperties: ["length", "b", "valueOf", "__proto__"])
        const v26 = {a:1337,toString:v16,constructor:"NEGATIVE_INFINITY",valueOf:v25,b:13.37,c:JSON,e:JSON};
        // v26 = .object(ofGroup: Object, withProperties: ["b", "constructor", "c", "valueOf", "toString", "__proto__", "a", "e"])
        const v28 = JSON.stringify(v26,Reflect,"name");
        // v28 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    } catch(v29) {
    }
    return v3;
}
const v30 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "setPrototypeOf", "construct", "isExtensible", "get", "deleteProperty", "preventExtensions", "has", "getPrototypeOf", "ownKeys", "call"])
const v32 = new Proxy(v9,v30);
// v32 = .unknown
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
