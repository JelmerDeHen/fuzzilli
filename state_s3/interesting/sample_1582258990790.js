function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {e:2676202182,valueOf:v3,b:2676202182,a:Float32Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "a", "valueOf", "e"])
const v6 = new Uint16Array(v4);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
const v7 = v6.subarray(2676202182);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["length", "__proto__", "byteOffset", "byteLength", "constructor", "buffer"], withMethods: ["reverse", "values", "fill", "findIndex", "every", "indexOf", "join", "sort", "copyWithin", "includes", "map", "set", "keys", "subarray", "reduce", "reduceRight", "slice", "entries", "filter", "some", "find", "lastIndexOf", "forEach"])
}
%NeverOptimizeFunction(main);
main();
