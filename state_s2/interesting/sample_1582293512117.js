function main() {
let v6 = 0;
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        const v19 = {};
        // v19 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v20 = v19;
        const v21 = Object.entries(v16);
        // v21 = .object()
        const v26 = [2153514987,1,13.37,13.37,v17];
        // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v28 = [v20,v26,v26];
        // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v29 = {length:13.37,b:v16,valueOf:v26,__proto__:v28};
        // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "valueOf"])
        const v30 = {a:1853908484,toString:v16,constructor:"NEGATIVE_INFINITY",valueOf:v29,b:13.37,c:JSON,e:JSON};
        // v30 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "c", "b", "a", "e", "constructor", "toString"])
        const v32 = JSON.stringify(v30,Reflect,"name");
        // v32 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    } catch(v33) {
    }
    return 2147483648;
}
const v34 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "has", "getPrototypeOf", "isExtensible", "deleteProperty", "preventExtensions", "setPrototypeOf", "get", "construct", "call", "set"])
const v36 = new Proxy(v11,v34);
// v36 = .unknown
v36[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
