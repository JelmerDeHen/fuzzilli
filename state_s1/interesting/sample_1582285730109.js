function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v9 = {};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v10 = v9;
    const v15 = [2153514987,13.37,13.37,13.37,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v17 = [v10,v15,v15];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v18 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v15,__proto__:v17};
    // v18 = .object(ofGroup: Object, withProperties: ["length", "b", "valueOf", "__proto__"])
    const v19 = {a:1337,toString:v9,constructor:"NEGATIVE_INFINITY",valueOf:v18,b:13.37,c:JSON,e:JSON};
    // v19 = .object(ofGroup: Object, withProperties: ["constructor", "b", "__proto__", "valueOf", "a", "toString", "e", "c"])
    const v21 = JSON.stringify(v19,Reflect,"name");
    // v21 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    let v25 = undefined;
    const v29 = {valueOf:JSON,length:"search"};
    // v29 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
    JSON[v29] = -5.0;
    const v32 = JSON.stringify(JSON,JSON,1513747027);
    // v32 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    JSON[undefined] = v32;
}
const v48 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v48 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "call", "getPrototypeOf", "construct", "has", "ownKeys", "deleteProperty", "setPrototypeOf", "isExtensible", "get"])
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
