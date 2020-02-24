function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
v6.valueOf = 1337;
const v9 = {length:13.37,a:gc,constructor:gc};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a", "constructor"])
function v10(v11,v12) {
    return gc;
}
const v13 = v10();
// v13 = .unknown
const v14 = v13();
// v14 = .unknown
const v15 = {defineProperty:v14,get:v14,getOwnPropertyDescriptor:gc,apply:v13,set:v10,preventExtensions:v14,setPrototypeOf:gc,construct:gc};
// v15 = .object(ofGroup: Object, withProperties: ["get", "defineProperty", "__proto__", "apply", "preventExtensions"], withMethods: ["setPrototypeOf", "construct", "getOwnPropertyDescriptor", "set"])
const v17 = new Proxy(v9,v15);
// v17 = .unknown
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v23 = Object.values(v17);
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v24 = 13.37 % "number";
// v24 = .number
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
let v28 = v27;
const v29 = v24 || -4294967296;
// v29 = .boolean
const v31 = [v4,13.37,v6,-4294967296];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v32 = {__proto__:v4,valueOf:"number",a:Object,d:v31};
// v32 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "__proto__"], withMethods: ["a"])
const v35 = new Uint32Array(256);
// v35 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
const v36 = {valueOf:v4};
// v36 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
let v37 = v6;
const v39 = [1000000.0,1000000.0,1000000.0,1000000.0,1000000.0];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v42 = JSON.stringify(Math,v39);
// v42 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v43 = {};
// v43 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v45 = new Proxy(v39,v43);
// v45 = .unknown
const v46 = v43 - 1;
// v46 = .primitive
const v47 = Object();
// v47 = .object()
}
%NeverOptimizeFunction(main);
main();
