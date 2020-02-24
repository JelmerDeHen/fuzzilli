function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v9 = {};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v10 = v9;
    const v15 = [2153514987,13.37,13.37,13.37,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v17 = [v10,v15,v15];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v18 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v15,__proto__:v17};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "valueOf"])
    const v19 = {a:1337,toString:v9,constructor:"NEGATIVE_INFINITY",valueOf:v18,b:13.37,c:JSON,e:JSON};
    // v19 = .object(ofGroup: Object, withProperties: ["toString", "c", "e", "valueOf", "b", "constructor", "__proto__", "a"])
    const v21 = JSON.stringify(v19,Reflect,"name");
    // v21 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    let v25 = undefined;
    const v29 = {valueOf:JSON,length:"search"};
    // v29 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__"])
    JSON[v29] = -5.0;
    const v32 = JSON.stringify(JSON,JSON,1513747027);
    // v32 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    JSON[undefined] = v32;
}
const v48 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v48 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "has", "getPrototypeOf", "isExtensible", "setPrototypeOf", "get", "deleteProperty", "construct", "ownKeys", "preventExtensions", "set"])
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
