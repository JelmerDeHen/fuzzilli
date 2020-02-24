function main() {
const v2 = ~"symbol";
// v2 = .boolean
const v5 = [2.2250738585072014e-308,2.2250738585072014e-308];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = [v7];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = {c:v5,constructor:2.2250738585072014e-308,a:1337,length:v5,__proto__:v7};
// v9 = .object(ofGroup: Object, withProperties: ["c", "length", "constructor", "a", "__proto__"])
const v10 = {toString:JSON,b:2.2250738585072014e-308,c:"symbol",length:v7};
// v10 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "toString", "b", "c"])
let v11 = "symbol";
const v14 = [1337,1337,1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        const v21 = {};
        // v21 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v22 = v21;
        const v27 = [2153514987,13.37,13.37,13.37,v19];
        // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v29 = [v22,v27,v27];
        // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v30 = {toString:13.37,b:"SJlLk2U6S0",valueOf:v14,__proto__:v29};
        // v30 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "b", "__proto__"])
        const v31 = {a:1337,toString:v16,constructor:"SJlLk2U6S0",valueOf:v30,b:13.37,c:JSON,e:JSON};
        // v31 = .object(ofGroup: Object, withProperties: ["b", "constructor", "e", "valueOf", "a", "c", "__proto__", "toString"])
        const v33 = JSON.stringify(v31,Array,"symbol");
        // v33 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    } catch(v34) {
    }
    return v19;
}
const v35 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "deleteProperty", "call", "get", "setPrototypeOf", "has", "isExtensible", "preventExtensions", "getPrototypeOf", "construct", "ownKeys"])
const v37 = new Proxy(v14,v35);
// v37 = .unknown
v37[1] = "__proto__";
}
%NeverOptimizeFunction(main);
main();
