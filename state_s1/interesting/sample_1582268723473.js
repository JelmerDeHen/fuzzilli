function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {__proto__:"hasInstance",d:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v5 = {call:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v7 = new Proxy(v0,v5);
// v7 = .unknown
for (const v8 in v7) {
}
}
%NeverOptimizeFunction(main);
main();
