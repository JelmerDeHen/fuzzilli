function main() {
const v1 = "buffer"[-65536];
// v1 = .unknown
const v3 = [2.0,2.0];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v6 = undefined;
const v7 = v3.includes(v1,v6,1337);
// v7 = .boolean
}
%NeverOptimizeFunction(main);
main();
