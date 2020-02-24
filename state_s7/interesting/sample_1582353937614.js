function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = new Uint16Array(v1);
// v4 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
v4.constructor = Uint8ClampedArray;
const v6 = v4.slice(v4,1337);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["find", "sort", "entries", "some", "values", "forEach", "includes", "indexOf", "reduceRight", "copyWithin", "join", "lastIndexOf", "every", "filter", "keys", "subarray", "fill", "map", "slice", "reduce", "set", "findIndex", "reverse"])
let v9 = 0;
const v13 = v9 + 1;
// v13 = .primitive
v9 = v13;
}
%NeverOptimizeFunction(main);
main();
