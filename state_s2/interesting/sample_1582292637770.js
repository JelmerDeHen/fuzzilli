function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v13 = [1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v17(v18,v19,v20,v21,v22) {
    'use strict'
    const v24 = {get:eval,set:v18};
    // v24 = .object(ofGroup: Object, withProperties: ["__proto__", "set"], withMethods: ["get"])
    const v26 = Object.defineProperty(v13,"constructor",v24);
    // v26 = .undefined
    const v27 = {has:v17,getPrototypeOf:v18,call:v22,apply:v22,getOwnPropertyDescriptor:v17,set:v21,ownKeys:v17,preventExtensions:v21,isExtensible:v19,defineProperty:v18,get:v20,deleteProperty:eval,setPrototypeOf:v21};
    // v27 = .object(ofGroup: Object, withProperties: ["preventExtensions", "get", "set", "__proto__", "setPrototypeOf", "apply", "call", "getPrototypeOf", "isExtensible", "defineProperty"], withMethods: ["ownKeys", "getOwnPropertyDescriptor", "has", "deleteProperty"])
    const v29 = Proxy(Proxy,v27);
    // v29 = .unknown
    for (const v30 in undefined) {
        let v32 = v4;
        v21[255] = 0;
    }
}
const v34 = [3536304147];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v36 = "jZZhI/kPfh";
const v38 = [v17,Infinity,Infinity];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v39 = [v36,v38];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v40 = v17.toLocaleString();
// v40 = .unknown
const v41 = {c:v40,d:v34};
// v41 = .object(ofGroup: Object, withProperties: ["d", "c", "__proto__"])
let v43 = v39;
let v44 = v41;
const v45 = [Float32Array,v44,v44];
// v45 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
v43 = v45;
const v46 = JSON.stringify(v43);
// v46 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v47 = eval(v46);
// v47 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
}
%NeverOptimizeFunction(main);
main();
