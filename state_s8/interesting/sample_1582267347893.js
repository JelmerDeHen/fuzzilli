function main() {
const v2 = "buffer"[-65536];
// v2 = .unknown
const v4 = [2.0,2.0];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
v4.length = 2378702048;
let v7 = undefined;
const v8 = v4.includes(v2,v7,1337);
// v8 = .boolean
}
%NeverOptimizeFunction(main);
main();
