function main() {
let v4 = undefined;
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {__proto__:"hasInstance",d:v7};
// v8 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
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
