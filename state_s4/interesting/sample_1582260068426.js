function main() {
const v2 = Reflect / "undefined";
// v2 = .number
const v4 = Symbol.toPrimitive;
// v4 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Symbol[v4] = Symbol;
const v6 = [13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
Reflect[Symbol] = v6;
let v9 = undefined;
}
%NeverOptimizeFunction(main);
main();
