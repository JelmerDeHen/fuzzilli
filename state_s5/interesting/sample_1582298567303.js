function main() {
let v5 = 13.37;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v9 = new Uint8ClampedArray(512);
// v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
const v11 = [-245067025,-245067025,-245067025,-245067025];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = [13.37,13.37,13.37,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v16 = [v13,640015.1140963933,640015.1140963933];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v17 = {length:1337,toString:v16,__proto__:v11};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "toString"])
function v19(v20,v21,v22,v23,v24) {
    'use strict'
}
let v25 = 1337;
const v27 = [v19,-3170815044,Infinity];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v28 = [v25,v27];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v29 = v28.toLocaleString();
// v29 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v30 = {c:v29,d:v9};
// v30 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "d"])
let v32 = v28;
let v33 = v30;
const v34 = [v32,v17,v33];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
v32 = v34;
const v35 = JSON.stringify(v32);
// v35 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v36 = JSON.parse(v35,v19);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
