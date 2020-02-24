function main() {
const v3 = "function".toString();
// v3 = .unknown
const v5 = [13.37,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = Reflect.set(v5,v3,-2147483648,-62210108);
// v8 = .boolean
}
%NeverOptimizeFunction(main);
main();
