function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v3 = Array(1337);
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
v3[276188947] = v1;
}
%NeverOptimizeFunction(main);
main();
