function main() {
const v1 = ["boolean","boolean"];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        const v13 = {};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v14 = v13;
        const v15 = Object.entries(v10);
        // v15 = .object()
        const v20 = [2153514987,1,13.37,13.37,v11];
        // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v22 = [v14,v20,v20];
        // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v23 = {length:13.37,b:v10,valueOf:v20,__proto__:v22};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "valueOf"])
        const v24 = {a:7,toString:v10,constructor:"NEGATIVE_INFINITY",valueOf:v23,b:13.37,c:JSON,e:JSON};
        // v24 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "a", "toString", "c", "e", "constructor"])
        const v26 = JSON.stringify(v24,Reflect,"name");
        // v26 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    } catch(v27) {
    }
    return v1;
}
const v28 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
// v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "construct", "deleteProperty", "setPrototypeOf", "preventExtensions", "getPrototypeOf", "has", "call", "get", "isExtensible", "set"])
const v30 = new Proxy(v5,v28);
// v30 = .unknown
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
