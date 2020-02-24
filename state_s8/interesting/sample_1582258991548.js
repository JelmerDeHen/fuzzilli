function main() {
Array[127] = 127;
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = {__proto__:"hasInstance",d:v8};
// v9 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v11 = {call:v9};
// v11 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
const v13 = new Proxy(Array,v11);
// v13 = .unknown
for (const v14 in v13) {
}
const v15 = 3 < 127;
// v15 = .boolean
}
%NeverOptimizeFunction(main);
main();
