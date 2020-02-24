function main() {
const v3 = "function".toString();
// v3 = .unknown
const v5 = [13.37,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = Reflect.set(v5,v3,-2147483648,-62210108);
// v8 = .boolean
}
%NeverOptimizeFunction(main);
main();
