function main() {
let v4 = undefined;
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
