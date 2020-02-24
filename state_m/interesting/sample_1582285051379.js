function main() {
const v3 = [13.37,3609309068,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = {a:3609309068,c:"undefined"};
// v6 = .object(ofGroup: Object, withProperties: ["c", "a", "__proto__"])
const v7 = {e:1337,__proto__:v3,constructor:1337,a:v5,c:"undefined",valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "constructor", "valueOf", "a", "e"])
const v8 = v7[-2147483647];
// v8 = .unknown
const v10 = new Float64Array(v7);
// v10 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "reverse", "fill", "forEach", "every", "copyWithin", "includes", "set", "some", "find", "slice", "subarray", "reduce", "values", "keys", "sort", "lastIndexOf", "entries", "indexOf", "filter", "join", "map"])
const v11 = v10.sort(v8);
// v11 = .undefined
}
%NeverOptimizeFunction(main);
main();
