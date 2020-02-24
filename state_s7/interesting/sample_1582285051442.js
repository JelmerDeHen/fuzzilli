function main() {
const v3 = [13.37,3609309068,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {a:3609309068,c:"undefined"};
// v6 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__"])
const v7 = {e:1337,__proto__:v3,constructor:1337,a:v5,c:"undefined",valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "constructor", "c", "e"])
const v8 = v7[-2147483647];
// v8 = .unknown
const v10 = new Float64Array(v7);
// v10 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
const v11 = v10.sort(v8);
// v11 = .undefined
}
%NeverOptimizeFunction(main);
main();
