function main() {
let v17 = 0;
const v20 = v17 + 1;
// v20 = .primitive
v17 = v20;
const v27 = [1337,1337];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v50 = 0;
const v51 = v50 + 1;
// v51 = .primitive
v50 = v51;
const v59 = [1337,1337,1337,1337];
// v59 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v63 = v27.shift();
// v63 = .unknown
const v65 = Symbol.toPrimitive;
// v65 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v65[v65] = v59;
const v75 = 1024 % 13.37;
// v75 = .number
}
%NeverOptimizeFunction(main);
main();
