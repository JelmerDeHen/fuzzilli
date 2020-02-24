function main() {
Array[127] = 127;
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = {__proto__:"hasInstance",d:v8};
// v9 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
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
