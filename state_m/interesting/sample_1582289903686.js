function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v12 = {};
        // v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v13 = v12;
        const v14 = Object.entries(v9);
        // v14 = .object()
        const v19 = [2153514987,1,13.37,13.37,v10];
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v21 = [v13,v19,v19];
        // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v22 = {length:13.37,b:v9,valueOf:v19,__proto__:v21};
        // v22 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "length", "valueOf"])
        const v23 = {a:1337,toString:v9,constructor:"NEGATIVE_INFINITY",valueOf:v22,b:13.37,c:JSON,e:JSON};
        // v23 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "__proto__", "c", "a", "e", "b", "valueOf"])
        const v25 = JSON.stringify(v23,Reflect,"name");
        // v25 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
    } catch(v26) {
    }
    return 1245602477;
}
const v27 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "get", "deleteProperty", "construct", "isExtensible", "call", "preventExtensions", "set", "has", "setPrototypeOf", "ownKeys"])
const v29 = new Proxy(v4,v27);
// v29 = .unknown
v29[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
