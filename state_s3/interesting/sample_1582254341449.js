function main() {
let v1 = 9007199254740993;
let v2 = v1;
const v3 = (9007199254740993)[v2];
// v3 = .unknown
const v4 = {};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = {set:v3};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
const v8 = Object.defineProperty(v4,"length",v6);
// v8 = .undefined
const v13 = [1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v14 = [];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v24 = typeof 13.37;
// v24 = .string
const v26 = v24 === "function";
// v26 = .boolean
let v31 = 0;
v14[129] = "length";
const v32 = v31 + 1;
// v32 = .primitive
v31 = v32;
const v33 = v13.pop();
// v33 = .unknown
const v83 = !0;
// v83 = .boolean
let v86 = 0;
}
%NeverOptimizeFunction(main);
main();
