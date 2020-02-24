function main() {
const v2 = "buffer"[-65536];
// v2 = .unknown
const v4 = [2.0,2.0];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
v4.length = 2378702048;
let v7 = undefined;
const v8 = v4.includes(v2,v7,1337);
// v8 = .boolean
}
%NeverOptimizeFunction(main);
main();
