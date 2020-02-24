function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:"string",valueOf:"string",toString:v4,__proto__:ArrayBuffer,a:128,length:128};
// v8 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "length", "toString", "a", "__proto__"])
const v9 = {b:v4,constructor:v7,e:128,d:"string",length:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "e", "length", "b", "d"])
let v10 = 128;
let v13 = 0;
const v17 = [1337,1337,1337,1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v22[3] = v22;
    } catch(v23) {
        const v27 = {length:"N0Xx92zvHQ"};
        // v27 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
        const v29 = {c:eval,get:v18};
        // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["c", "get"])
        const v31 = Object.defineProperty(Number,10,v29);
        // v31 = .undefined
        let v33 = 0;
        const v34 = v33 + 1;
        // v34 = .primitive
        const v36 = {set:gc,get:eval};
        // v36 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v38 = Object.defineProperty(Number,3500322937,v36);
        // v38 = .undefined
    }
    const v42 = [v20];
    // v42 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v43 = [];
    // v43 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v44 = {toString:1073741824,e:Function,b:v43,valueOf:Function,a:v42,constructor:Function};
    // v44 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "constructor", "toString", "a", "b", "valueOf"])
    const v48 = {isExtensible:2291304804,apply:v44,getOwnPropertyDescriptor:1337,preventExtensions:2291304804,ownKeys:JSON,deleteProperty:2291304804};
    // v48 = .object(ofGroup: Object, withProperties: ["preventExtensions", "ownKeys", "deleteProperty", "isExtensible", "getOwnPropertyDescriptor", "__proto__", "apply"])
    const v50 = new Number(v42,v48);
    // v50 = .number
    const v51 = JSON.stringify(1337,v50,v50);
    // v51 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    return v44;
}
const v52 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
// v52 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "has", "deleteProperty", "ownKeys", "preventExtensions", "call", "getPrototypeOf", "isExtensible", "get", "setPrototypeOf", "construct"])
const v54 = new Proxy(v17,v52);
// v54 = .unknown
v54[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
