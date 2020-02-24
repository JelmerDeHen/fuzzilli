function main() {
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v16 = [1337,1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v20(v21,v22,v23,v24,v25) {
    'use strict'
    const v27 = {get:eval,set:v21};
    // v27 = .object(ofGroup: Object, withProperties: ["set", "__proto__"], withMethods: ["get"])
    v21[1147233727] = v25;
    const v29 = Object.defineProperty(v16,"constructor",v27);
    // v29 = .undefined
    const v30 = {has:v20,getPrototypeOf:v21,call:v25,apply:v25,getOwnPropertyDescriptor:v20,set:v24,ownKeys:v20,preventExtensions:v24,isExtensible:v22,defineProperty:v21,get:v23,deleteProperty:eval,setPrototypeOf:v24};
    // v30 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible", "call", "getPrototypeOf", "setPrototypeOf", "defineProperty", "set", "get", "apply", "preventExtensions"], withMethods: ["ownKeys", "getOwnPropertyDescriptor", "deleteProperty", "has"])
    const v32 = Proxy(Proxy,v30);
    // v32 = .unknown
    for (const v33 in undefined) {
        let v34 = v7;
    }
}
const v36 = [3536304147];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v38 = "jZZhI/kPfh";
const v40 = [v20,Infinity,Infinity];
// v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v41 = [v38,v40];
// v41 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v42 = v20.toLocaleString();
// v42 = .unknown
const v43 = {c:v42,d:v36};
// v43 = .object(ofGroup: Object, withProperties: ["d", "c", "__proto__"])
let v45 = v41;
let v46 = v43;
const v47 = [Float32Array,v46,v46];
// v47 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
v45 = v47;
const v48 = JSON.stringify(v45);
// v48 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v49 = eval(v48);
// v49 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
