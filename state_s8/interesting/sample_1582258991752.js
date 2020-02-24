function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {e:2676202182,valueOf:v3,b:2676202182,a:Float32Array};
// v4 = .object(ofGroup: Object, withProperties: ["a", "e", "b", "__proto__", "valueOf"])
const v6 = new Uint16Array(v4);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
const v7 = v6.subarray(2676202182);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["length", "constructor", "buffer", "byteOffset", "byteLength", "__proto__"], withMethods: ["fill", "values", "reduce", "find", "copyWithin", "forEach", "includes", "findIndex", "reverse", "entries", "every", "set", "slice", "filter", "some", "reduceRight", "subarray", "keys", "map", "sort", "indexOf", "join", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
