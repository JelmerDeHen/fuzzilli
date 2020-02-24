function main() {
const v2 = ["boolean",eval];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v14 = {};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v15 = v14;
        const v16 = Object.entries(v11);
        // v16 = .object()
        const v17 = eval < v2;
        // v17 = .boolean
        let v23 = 0;
        const v27 = v23 + 1;
        // v27 = .primitive
        v23 = v27;
        const v35 = [2153514987,1,13.37,13.37,v12];
        // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v37 = [v15,v35,v35];
        // v37 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v38 = {length:13.37,b:v11,valueOf:v35,__proto__:v37};
        // v38 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__", "b"])
        const v39 = {a:1337,toString:v11,constructor:"NEGATIVE_INFINITY",valueOf:v38,b:13.37,c:JSON,e:JSON};
        // v39 = .object(ofGroup: Object, withProperties: ["e", "b", "valueOf", "constructor", "c", "toString", "__proto__", "a"])
        const v41 = JSON.stringify(v39,Reflect,"name");
        // v41 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    } catch(v42) {
    }
}
const v43 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v43 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "preventExtensions", "ownKeys", "setPrototypeOf", "deleteProperty", "isExtensible", "getPrototypeOf", "get", "construct", "call", "set"])
const v45 = new Proxy(v6,v43);
// v45 = .unknown
v45[1] = "MIN_VALUE";
let v48 = 0;
const v49 = v48 + 1;
// v49 = .primitive
v48 = v49;
}
%NeverOptimizeFunction(main);
main();
