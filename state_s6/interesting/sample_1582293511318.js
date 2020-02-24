function main() {
let v6 = 0;
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        const v19 = {};
        // v19 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v20 = v19;
        const v21 = Object.entries(v16);
        // v21 = .object()
        const v26 = [2153514987,1,13.37,13.37,v17];
        // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v28 = [v20,v26,v26];
        // v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v29 = {length:13.37,b:v16,valueOf:v26,__proto__:v28};
        // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "valueOf"])
        const v30 = {a:1853908484,toString:v16,constructor:"NEGATIVE_INFINITY",valueOf:v29,b:13.37,c:JSON,e:JSON};
        // v30 = .object(ofGroup: Object, withProperties: ["constructor", "a", "toString", "b", "e", "c", "valueOf", "__proto__"])
        const v32 = JSON.stringify(v30,Reflect,"name");
        // v32 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    } catch(v33) {
    }
    return 2147483648;
}
const v34 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "isExtensible", "ownKeys", "deleteProperty", "getPrototypeOf", "construct", "get", "call", "setPrototypeOf", "preventExtensions", "set"])
const v36 = new Proxy(v11,v34);
// v36 = .unknown
v36[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
