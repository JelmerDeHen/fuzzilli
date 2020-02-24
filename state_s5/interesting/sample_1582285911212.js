function main() {
const v3 = [-1,-1,-1,-1,-1];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v10 = {};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v11 = v10;
    const v16 = [2153514987,13.37,13.37,13.37,v8];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v18 = [v11,v16,v16];
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v19 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v16,__proto__:v18};
    // v19 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "b"])
    const v20 = {a:1337,toString:v10,constructor:"NEGATIVE_INFINITY",valueOf:v19,b:13.37,c:JSON,e:JSON};
    // v20 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "b", "constructor", "c", "a", "__proto__", "toString"])
    const v22 = JSON.stringify(v20,Reflect,"length");
    // v22 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    return 1337;
}
const v23 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "getPrototypeOf", "setPrototypeOf", "get", "deleteProperty", "set", "isExtensible", "has", "ownKeys", "construct", "call"])
const v25 = new Proxy(v3,v23);
// v25 = .unknown
v25[1] = "0t.wbxs91k";
}
%NeverOptimizeFunction(main);
main();
