function main() {
Array[127] = 127;
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = {__proto__:"hasInstance",d:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v11 = {call:v9};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v13 = new Proxy(Array,v11);
// v13 = .unknown
for (const v14 in v13) {
}
const v15 = 3 < 127;
// v15 = .boolean
}
%NeverOptimizeFunction(main);
main();
