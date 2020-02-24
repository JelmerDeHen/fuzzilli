function main() {
const v3 = "function".toString();
// v3 = .unknown
const v5 = [13.37,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = Reflect.set(v5,v3,-2147483648,-62210108);
// v8 = .boolean
}
%NeverOptimizeFunction(main);
main();
