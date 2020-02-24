function main() {
let v6 = 0;
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        const v19 = {};
        // v19 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v20 = v19;
        const v21 = Object.entries(v16);
        // v21 = .object()
        const v26 = [2153514987,1,13.37,13.37,v17];
        // v26 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v28 = [v20,v26,v26];
        // v28 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v29 = {length:13.37,b:v16,valueOf:v26,__proto__:v28};
        // v29 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf", "b"])
        const v30 = {a:1853908484,toString:v16,constructor:"NEGATIVE_INFINITY",valueOf:v29,b:13.37,c:JSON,e:JSON};
        // v30 = .object(ofGroup: Object, withProperties: ["constructor", "c", "e", "valueOf", "toString", "b", "__proto__", "a"])
        const v32 = JSON.stringify(v30,Reflect,"name");
        // v32 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    } catch(v33) {
    }
    return 2147483648;
}
const v34 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "isExtensible", "construct", "getPrototypeOf", "has", "deleteProperty", "set", "call", "setPrototypeOf", "get", "preventExtensions"])
const v36 = new Proxy(v11,v34);
// v36 = .unknown
v36[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
