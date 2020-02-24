function main() {
let v4 = undefined;
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
