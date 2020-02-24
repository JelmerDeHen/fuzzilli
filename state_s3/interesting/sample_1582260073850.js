function main() {
const v2 = Reflect / "undefined";
// v2 = .number
const v4 = Symbol.toPrimitive;
// v4 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Symbol[v4] = Symbol;
const v6 = [13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
Reflect[Symbol] = v6;
let v9 = undefined;
}
%NeverOptimizeFunction(main);
main();
