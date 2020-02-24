function main() {
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v12 = {};
        // v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v13 = v12;
        const v18 = [2153514987,13.37,13.37,13.37,13.37];
        // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v20 = [v13,v18,v18];
        // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v18,__proto__:v20};
        // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf", "b"])
        const v22 = {a:1337,toString:v12,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
        // v22 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "c", "e", "b", "valueOf", "toString"])
        const v24 = JSON.stringify(v22,Reflect,"name");
        // v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
        v10[3] = v10;
    } catch(v25) {
    }
    const v27 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "getPrototypeOf", "defineProperty", "getOwnPropertyDescriptor", "preventExtensions", "construct", "ownKeys", "isExtensible", "get", "set", "apply"])
}
const v28 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "construct", "ownKeys", "getPrototypeOf", "setPrototypeOf", "preventExtensions", "has", "isExtensible", "set", "deleteProperty", "get"])
const v30 = new Proxy(v5,v28);
// v30 = .unknown
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
