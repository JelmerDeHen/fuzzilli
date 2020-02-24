function main() {
let v4 = undefined;
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {__proto__:"hasInstance",d:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v11 = Object.seal(Array);
// v11 = .object()
const v13 = {call:v8};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v15 = new Proxy(Array,v13);
// v15 = .unknown
for (const v16 in v15) {
}
}
%NeverOptimizeFunction(main);
main();
