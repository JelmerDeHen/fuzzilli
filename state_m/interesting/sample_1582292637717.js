function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v13 = [1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v17(v18,v19,v20,v21,v22) {
    'use strict'
    const v24 = {get:eval,set:v18};
    // v24 = .object(ofGroup: Object, withProperties: ["set", "__proto__"], withMethods: ["get"])
    const v26 = Object.defineProperty(v13,"constructor",v24);
    // v26 = .undefined
    const v27 = {has:v17,getPrototypeOf:v18,call:v22,apply:v22,getOwnPropertyDescriptor:v17,set:v21,ownKeys:v17,preventExtensions:v21,isExtensible:v19,defineProperty:v18,get:v20,deleteProperty:eval,setPrototypeOf:v21};
    // v27 = .object(ofGroup: Object, withProperties: ["set", "apply", "preventExtensions", "call", "setPrototypeOf", "getPrototypeOf", "get", "isExtensible", "__proto__", "defineProperty"], withMethods: ["deleteProperty", "has", "getOwnPropertyDescriptor", "ownKeys"])
    const v29 = Proxy(Proxy,v27);
    // v29 = .unknown
    for (const v30 in undefined) {
        let v32 = v4;
        v21[255] = 0;
    }
}
const v34 = [3536304147];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v36 = "jZZhI/kPfh";
const v38 = [v17,Infinity,Infinity];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v39 = [v36,v38];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v40 = v17.toLocaleString();
// v40 = .unknown
const v41 = {c:v40,d:v34};
// v41 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "c"])
let v43 = v39;
let v44 = v41;
const v45 = [Float32Array,v44,v44];
// v45 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
v43 = v45;
const v46 = JSON.stringify(v43);
// v46 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v47 = eval(v46);
// v47 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
