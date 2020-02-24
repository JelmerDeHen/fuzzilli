function main() {
const v3 = [-1,-1,-1,-1,-1];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v10 = {};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v11 = v10;
    const v16 = [2153514987,13.37,13.37,13.37,v8];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v18 = [v11,v16,v16];
    // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v19 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v16,__proto__:v18};
    // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "valueOf"])
    const v20 = {a:1337,toString:v10,constructor:"NEGATIVE_INFINITY",valueOf:v19,b:13.37,c:JSON,e:JSON};
    // v20 = .object(ofGroup: Object, withProperties: ["b", "toString", "constructor", "c", "valueOf", "__proto__", "e", "a"])
    const v22 = JSON.stringify(v20,Reflect,"length");
    // v22 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
    return 1337;
}
const v23 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "preventExtensions", "isExtensible", "call", "setPrototypeOf", "set", "get", "has", "getPrototypeOf", "deleteProperty", "construct"])
const v25 = new Proxy(v3,v23);
// v25 = .unknown
v25[1] = "0t.wbxs91k";
}
%NeverOptimizeFunction(main);
main();
