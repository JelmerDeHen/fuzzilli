function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = [v3,471091797,DataView];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = new Float32Array(61010);
// v8 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
const v9 = {a:1337,e:1337,d:1337,valueOf:v5,...v8,...471091797,...1337};
// v9 = .object(ofGroup: Object, withProperties: ["length", "a", "valueOf", "__proto__", "constructor", "e", "buffer", "byteOffset", "d", "byteLength"], withMethods: ["includes", "reduceRight", "sort", "subarray", "values", "every", "forEach", "find", "join", "some", "fill", "map", "reverse", "set", "copyWithin", "reduce", "lastIndexOf", "slice", "findIndex", "filter", "indexOf", "entries", "keys"])
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
delete v9[0];
}
%NeverOptimizeFunction(main);
main();
