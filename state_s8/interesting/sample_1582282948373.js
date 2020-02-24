function main() {
const v2 = -1463623417 == "undefined";
// v2 = .boolean
let v5 = 0;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v12 = [-9007199254740993];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v14 = Symbol.species;
// v14 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Int32Array[v14] = v12;
}
%NeverOptimizeFunction(main);
main();
