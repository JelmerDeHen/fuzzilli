function main() {
const v2 = "buffer"[-65536];
// v2 = .unknown
const v4 = [2.0,2.0];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
v4.length = 2378702048;
let v7 = undefined;
const v8 = v4.includes(v2,v7,1337);
// v8 = .boolean
}
%NeverOptimizeFunction(main);
main();
