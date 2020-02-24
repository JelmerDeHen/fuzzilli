function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {e:2676202182,valueOf:v3,b:2676202182,a:Float32Array};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "b", "__proto__", "e"])
const v6 = new Uint16Array(v4);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
const v7 = v6.subarray(2676202182);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["constructor", "byteLength", "__proto__", "length", "byteOffset", "buffer"], withMethods: ["keys", "slice", "copyWithin", "set", "sort", "map", "every", "subarray", "find", "reduce", "entries", "indexOf", "includes", "values", "forEach", "join", "lastIndexOf", "findIndex", "reduceRight", "some", "fill", "reverse", "filter"])
}
%NeverOptimizeFunction(main);
main();
