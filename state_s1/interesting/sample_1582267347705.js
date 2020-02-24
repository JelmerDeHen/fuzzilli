function main() {
const v2 = "buffer"[-65536];
// v2 = .unknown
const v4 = [2.0,2.0];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
v4.length = 2378702048;
let v7 = undefined;
const v8 = v4.includes(v2,v7,1337);
// v8 = .boolean
}
%NeverOptimizeFunction(main);
main();
