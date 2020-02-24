function main() {
Array[127] = 127;
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
