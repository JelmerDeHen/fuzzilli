function main() {
const v3 = "function".toString();
// v3 = .unknown
const v5 = [13.37,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = Reflect.set(v5,v3,-2147483648,-62210108);
// v8 = .boolean
}
%NeverOptimizeFunction(main);
main();
