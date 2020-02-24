function main() {
const v2 = -1463623417 == "undefined";
// v2 = .boolean
let v5 = 0;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v12 = [-9007199254740993];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v14 = Symbol.species;
// v14 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Int32Array[v14] = v12;
}
%NeverOptimizeFunction(main);
main();
