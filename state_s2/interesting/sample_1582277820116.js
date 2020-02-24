function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
let v8 = 0;
let v13 = 0;
const v15 = [13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v18 = [1337,1337,1337,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        const v25 = {};
        // v25 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v26 = v25;
        const v31 = [2153514987,13.37,13.37,13.37,v15];
        // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v33 = [v26,v31,v31];
        // v33 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v34 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v31,__proto__:v33};
        // v34 = .object(ofGroup: Object, withProperties: ["length", "b", "valueOf", "__proto__"])
        const v35 = {a:1337,toString:v25,constructor:"NEGATIVE_INFINITY",valueOf:v34,b:13.37,c:JSON,e:JSON};
        // v35 = .object(ofGroup: Object, withProperties: ["c", "constructor", "a", "e", "toString", "valueOf", "b", "__proto__"])
        const v37 = JSON.stringify(v35,Reflect,"name");
        // v37 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
        v23[3] = v23;
    } catch(v38) {
    }
    const v40 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v40 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "getPrototypeOf", "defineProperty", "set", "deleteProperty", "ownKeys", "construct", "get", "isExtensible", "preventExtensions", "getOwnPropertyDescriptor"])
}
const v41 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
// v41 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "ownKeys", "getPrototypeOf", "deleteProperty", "call", "isExtensible", "setPrototypeOf", "preventExtensions", "construct", "set", "has"])
const v43 = new Proxy(v18,v41);
// v43 = .unknown
v43[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
