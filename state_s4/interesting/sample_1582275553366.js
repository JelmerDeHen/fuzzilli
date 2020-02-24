function main() {
let v3 = 2003152700;
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        const v13 = {};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v14 = v13;
        const v19 = [2153514987,13.37,13.37,13.37,13.37];
        // v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v21 = [v14,v19,v19];
        // v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v22 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v21};
        // v22 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "valueOf"])
        const v23 = {a:1337,toString:v13,constructor:"NEGATIVE_INFINITY",valueOf:v22,b:13.37,c:JSON,e:JSON};
        // v23 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "a", "toString", "__proto__", "c", "constructor", "e"])
        const v25 = JSON.stringify(v23,Uint16Array,"name");
        // v25 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    } catch(v26) {
    }
}
const v27 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
// v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "getPrototypeOf", "ownKeys", "construct", "get", "has", "isExtensible", "deleteProperty", "setPrototypeOf", "call"])
const v29 = new Proxy(v6,v27);
// v29 = .unknown
v29[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
