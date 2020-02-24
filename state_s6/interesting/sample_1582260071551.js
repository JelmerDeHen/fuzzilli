function main() {
const v2 = Reflect / "undefined";
// v2 = .number
const v4 = Symbol.toPrimitive;
// v4 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Symbol[v4] = Symbol;
const v6 = [13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
Reflect[Symbol] = v6;
let v9 = undefined;
}
%NeverOptimizeFunction(main);
main();
