function main() {
const v2 = ["boolean",eval];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v14 = {};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v15 = v14;
        const v16 = Object.entries(v11);
        // v16 = .object()
        const v21 = [2153514987,1,13.37,13.37,v12];
        // v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v23 = [v15,v21,v21];
        // v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v24 = {length:13.37,b:v11,valueOf:v21,__proto__:v23};
        // v24 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "b"])
        const v25 = {a:7,toString:v11,constructor:"NEGATIVE_INFINITY",valueOf:v24,b:13.37,c:JSON,e:JSON};
        // v25 = .object(ofGroup: Object, withProperties: ["toString", "b", "c", "a", "constructor", "valueOf", "e", "__proto__"])
        const v27 = JSON.stringify(v25,Reflect,"name");
        // v27 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    } catch(v28) {
    }
    return v2;
}
const v29 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "isExtensible", "getPrototypeOf", "get", "ownKeys", "preventExtensions", "deleteProperty", "call", "has", "set", "construct"])
const v31 = new Proxy(v6,v29);
// v31 = .unknown
v31[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
