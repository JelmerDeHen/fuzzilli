function main() {
Array[127] = 127;
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
