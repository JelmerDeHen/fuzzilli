function main() {
const v2 = ["boolean",eval];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v14 = {};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v15 = v14;
        const v16 = Object.entries(v11);
        // v16 = .object()
        const v21 = [2153514987,1,13.37,13.37,v12];
        // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v23 = [v15,v21,v21];
        // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v24 = {length:13.37,b:v11,valueOf:v21,__proto__:v23};
        // v24 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "length"])
        const v25 = {a:7,toString:v11,constructor:"NEGATIVE_INFINITY",valueOf:v24,b:13.37,c:JSON,e:JSON};
        // v25 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "toString", "__proto__", "c", "b", "a", "e"])
        const v27 = JSON.stringify(v25,Reflect,"name");
        // v27 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    } catch(v28) {
    }
    return v2;
}
const v29 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "ownKeys", "getPrototypeOf", "isExtensible", "get", "set", "has", "construct", "preventExtensions", "setPrototypeOf", "call"])
const v31 = new Proxy(v6,v29);
// v31 = .unknown
v31[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
