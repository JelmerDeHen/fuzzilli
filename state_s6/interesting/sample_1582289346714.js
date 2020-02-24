function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = new Uint8ClampedArray(38117);
// v4 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "length", "buffer"], withMethods: ["filter", "forEach", "lastIndexOf", "find", "subarray", "reduce", "indexOf", "join", "entries", "copyWithin", "sort", "slice", "some", "fill", "reverse", "includes", "reduceRight", "values", "keys", "map", "every", "findIndex", "set"])
const v5 = v2.constructor;
// v5 = .object(ofGroup: Function, withProperties: ["prototype", "name", "caller", "constructor", "arguments", "length", "__proto__"], withMethods: ["apply", "bind", "call"]) + .function([.integer] => .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])) + .constructor([.integer] => .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"]))
const v6 = v5.apply(v2,v4);
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
