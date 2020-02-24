function main() {
let v4 = undefined;
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
