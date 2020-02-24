function main() {
const v3 = "function".toString();
// v3 = .unknown
const v5 = [13.37,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = Reflect.set(v5,v3,-2147483648,-62210108);
// v8 = .boolean
}
%NeverOptimizeFunction(main);
main();
