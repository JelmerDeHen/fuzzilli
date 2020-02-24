function main() {
const v2 = Reflect / "undefined";
// v2 = .number
const v4 = Symbol.toPrimitive;
// v4 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
Symbol[v4] = Symbol;
const v6 = [13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
Reflect[Symbol] = v6;
let v9 = undefined;
}
%NeverOptimizeFunction(main);
main();
