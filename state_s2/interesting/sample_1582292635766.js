function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {length:1337,e:1337,c:v2,a:1337,length:"symbol"};
// v3 = .object(ofGroup: Object, withProperties: ["a", "c", "e", "__proto__", "length"])
function v5(v6,v7,v8,v9) {
    'use strict'
    const v11 = {};
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v12 = v11;
    const v17 = [2153514987,13.37,13.37,13.37,v9];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v19 = [v12,v17,v17];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v20 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v17,__proto__:v19};
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "b", "valueOf"])
    for (const v21 in v8) {
    }
    const v22 = {a:256,toString:v11,constructor:"NEGATIVE_INFINITY",valueOf:v20,b:13.37,c:JSON,e:JSON};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "constructor", "a", "valueOf", "c", "e", "b"])
    const v24 = JSON.stringify(v22,Reflect,"oyAJZo1VcS");
    // v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    return v3;
}
const v25 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "construct", "getPrototypeOf", "deleteProperty", "get", "has", "call", "preventExtensions", "ownKeys", "isExtensible", "setPrototypeOf"])
const v30 = new Proxy(v3,v25);
// v30 = .unknown
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
