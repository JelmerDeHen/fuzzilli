function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v9 = {};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v10 = v9;
    const v15 = [2153514987,13.37,13.37,13.37,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v17 = [v10,v15,v15];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v18 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v15,__proto__:v17};
    // v18 = .object(ofGroup: Object, withProperties: ["length", "b", "valueOf", "__proto__"])
    const v19 = {a:1337,toString:v9,constructor:"NEGATIVE_INFINITY",valueOf:v18,b:13.37,c:JSON,e:JSON};
    // v19 = .object(ofGroup: Object, withProperties: ["toString", "a", "constructor", "e", "b", "c", "__proto__", "valueOf"])
    const v21 = JSON.stringify(v19,Reflect,"name");
    // v21 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    let v25 = undefined;
    const v29 = {valueOf:JSON,length:"search"};
    // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length"])
    JSON[v29] = -5.0;
    const v32 = JSON.stringify(JSON,JSON,1513747027);
    // v32 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    JSON[undefined] = v32;
}
const v48 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v48 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "getPrototypeOf", "set", "has", "isExtensible", "deleteProperty", "construct", "call", "get", "ownKeys", "setPrototypeOf"])
const v50 = new Proxy(v2,v48);
// v50 = .unknown
v50[1] = "MIN_VALUE";
let v55 = 0;
const v56 = v55 + 1;
// v56 = .primitive
v55 = v56;
const v57 = v3();
// v57 = .unknown
}
%NeverOptimizeFunction(main);
main();
