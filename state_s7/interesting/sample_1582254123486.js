function main() {
const v1 = {c:2728112620};
// v1 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v3 = {a:1337};
// v3 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {c:v5};
// v6 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
}
%NeverOptimizeFunction(main);
main();
