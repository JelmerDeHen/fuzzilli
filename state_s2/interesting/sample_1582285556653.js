function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v9 = {};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v10 = v9;
    const v15 = [2153514987,13.37,13.37,13.37,v7];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v17 = [v10,v15,v15];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v18 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v15,__proto__:v17};
    // v18 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "b"])
    const v19 = {a:1337,toString:v9,constructor:"NEGATIVE_INFINITY",valueOf:v18,b:13.37,c:JSON,e:JSON};
    // v19 = .object(ofGroup: Object, withProperties: ["b", "e", "a", "valueOf", "constructor", "toString", "__proto__", "c"])
    const v21 = JSON.stringify(v19,Reflect,"name");
    // v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
}
const v22 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "construct", "call", "ownKeys", "preventExtensions", "deleteProperty", "get", "getPrototypeOf", "isExtensible", "set", "has"])
const v24 = new Proxy(v2,v22);
// v24 = .unknown
v24[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
