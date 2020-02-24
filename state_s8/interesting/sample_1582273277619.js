function main() {
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v12 = {};
        // v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v13 = v12;
        const v18 = [2153514987,13.37,13.37,13.37,13.37];
        // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v20 = [v13,v18,v18];
        // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v18,__proto__:v20};
        // v21 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "__proto__", "length"])
        const v22 = {a:1337,toString:v12,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
        // v22 = .object(ofGroup: Object, withProperties: ["e", "toString", "a", "c", "valueOf", "b", "__proto__", "constructor"])
        const v24 = JSON.stringify(v22,Reflect,"name");
        // v24 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
        v10[3] = v10;
    } catch(v25) {
    }
    const v27 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "get", "getOwnPropertyDescriptor", "getPrototypeOf", "set", "construct", "deleteProperty", "isExtensible", "apply", "defineProperty", "ownKeys"])
}
const v28 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "has", "isExtensible", "deleteProperty", "call", "ownKeys", "set", "setPrototypeOf", "getPrototypeOf", "get", "preventExtensions"])
const v30 = new Proxy(v5,v28);
// v30 = .unknown
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
