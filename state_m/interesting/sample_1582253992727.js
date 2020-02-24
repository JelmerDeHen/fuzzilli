function main() {
const v3 = Object(13.37,1337);
// v3 = .object()
let v4 = v3;
const v6 = [v4,13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v7 = v6;
const v10 = "object".constructor;
// v10 = .function()
const v11 = v7 - v10;
// v11 = .number
}
%NeverOptimizeFunction(main);
main();
