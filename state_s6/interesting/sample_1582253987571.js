function main() {
const v3 = Object(13.37,1337);
// v3 = .object()
let v4 = v3;
const v6 = [v4,13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v7 = v6;
const v10 = "object".constructor;
// v10 = .function()
const v11 = v7 - v10;
// v11 = .number
}
%NeverOptimizeFunction(main);
main();
