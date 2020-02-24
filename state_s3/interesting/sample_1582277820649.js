function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
let v8 = 0;
let v13 = 0;
const v15 = [13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v18 = [1337,1337,1337,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        const v25 = {};
        // v25 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v26 = v25;
        const v31 = [2153514987,13.37,13.37,13.37,v15];
        // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v33 = [v26,v31,v31];
        // v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v34 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v31,__proto__:v33};
        // v34 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "length"])
        const v35 = {a:1337,toString:v25,constructor:"NEGATIVE_INFINITY",valueOf:v34,b:13.37,c:JSON,e:JSON};
        // v35 = .object(ofGroup: Object, withProperties: ["e", "b", "constructor", "__proto__", "a", "c", "toString", "valueOf"])
        const v37 = JSON.stringify(v35,Reflect,"name");
        // v37 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
        v23[3] = v23;
    } catch(v38) {
    }
    const v40 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v40 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "construct", "ownKeys", "preventExtensions", "isExtensible", "get", "getPrototypeOf", "deleteProperty", "getOwnPropertyDescriptor", "apply", "defineProperty"])
}
const v41 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
// v41 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "deleteProperty", "set", "get", "preventExtensions", "call", "construct", "getPrototypeOf", "setPrototypeOf", "isExtensible", "has"])
const v43 = new Proxy(v18,v41);
// v43 = .unknown
v43[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
