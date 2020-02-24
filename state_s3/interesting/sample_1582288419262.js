function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v9 = {};
        // v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v10 = v9;
        const v15 = [2153514987,13.37,13.37,13.37,v7];
        // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v17 = [v10,v15,v15];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v18 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v2,__proto__:v17};
        // v18 = .object(ofGroup: Object, withProperties: ["b", "length", "valueOf", "__proto__"])
        const v19 = {a:1337,toString:v4,constructor:"NEGATIVE_INFINITY",valueOf:v18,b:13.37,c:JSON,e:JSON};
        // v19 = .object(ofGroup: Object, withProperties: ["toString", "e", "b", "c", "a", "__proto__", "constructor", "valueOf"])
        const v21 = JSON.stringify(v19,parseInt,"name");
        // v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    } catch(v22) {
    }
}
const v23 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "get", "construct", "has", "setPrototypeOf", "isExtensible", "preventExtensions", "call", "ownKeys", "deleteProperty", "set"])
const v25 = new Proxy(v2,v23);
// v25 = .unknown
v25[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
