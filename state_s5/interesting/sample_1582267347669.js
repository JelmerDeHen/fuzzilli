function main() {
const v2 = "buffer"[-65536];
// v2 = .unknown
const v4 = [2.0,2.0];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
v4.length = 2378702048;
let v7 = undefined;
const v8 = v4.includes(v2,v7,1337);
// v8 = .boolean
}
%NeverOptimizeFunction(main);
main();
