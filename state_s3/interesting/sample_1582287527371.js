function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v11 = {};
        // v11 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v12 = v11;
        const v17 = [2153514987,1,13.37,13.37,v9];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v19 = [v12,v17,v17];
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v20 = {length:13.37,b:v8,valueOf:v17,__proto__:v19};
        // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf", "b"])
        const v21 = {a:1337,toString:v8,constructor:"NEGATIVE_INFINITY",valueOf:v20,b:13.37,c:JSON,e:JSON};
        // v21 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "__proto__", "a", "toString", "constructor", "c", "e"])
        const v23 = JSON.stringify(v21,Reflect,"name");
        // v23 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    } catch(v24) {
    }
    return Int16Array;
}
const v25 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "preventExtensions", "deleteProperty", "set", "construct", "has", "call", "setPrototypeOf", "get", "getPrototypeOf", "isExtensible"])
const v27 = new Proxy(v3,v25);
// v27 = .unknown
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
