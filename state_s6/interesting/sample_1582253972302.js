function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v68 = 1337 == 13.37;
// v68 = .boolean
let v146 = 0;
const v147 = v146 + 1;
// v147 = .primitive
v146 = v147;
let v155 = 0;
const v157 = v155 + 1;
// v157 = .primitive
v155 = v157;
const v166 = Symbol.toStringTag;
// v166 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v166[v166] = v4;
}
%NeverOptimizeFunction(main);
main();
