function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = {length:1337,e:1337,c:v2,a:1337,length:"symbol"};
// v3 = .object(ofGroup: Object, withProperties: ["e", "a", "__proto__", "length", "c"])
function v5(v6,v7,v8,v9) {
    'use strict'
    const v11 = {};
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v12 = v11;
    const v17 = [2153514987,13.37,13.37,13.37,v9];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v19 = [v12,v17,v17];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v20 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v17,__proto__:v19};
    // v20 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "b", "__proto__"])
    const v21 = {a:256,toString:v11,constructor:"NEGATIVE_INFINITY",valueOf:v20,b:13.37,c:JSON,e:JSON};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "c", "constructor", "a", "e", "toString"])
    const v23 = JSON.stringify(v21,Reflect,"oyAJZo1VcS");
    // v23 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    return v3;
}
const v24 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "get", "preventExtensions", "ownKeys", "has", "set", "getPrototypeOf", "call", "deleteProperty", "setPrototypeOf", "construct"])
const v26 = new Proxy(v3,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
