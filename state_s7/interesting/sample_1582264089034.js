function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [v3,471091797,DataView];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = new Float32Array(61010);
// v8 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
const v9 = {a:1337,e:1337,d:1337,valueOf:v5,...v8,...471091797,...1337};
// v9 = .object(ofGroup: Object, withProperties: ["buffer", "length", "constructor", "__proto__", "byteOffset", "valueOf", "byteLength", "a", "d", "e"], withMethods: ["find", "entries", "reduceRight", "copyWithin", "lastIndexOf", "sort", "findIndex", "includes", "fill", "slice", "reverse", "reduce", "join", "every", "keys", "forEach", "filter", "values", "some", "map", "subarray", "set", "indexOf"])
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
delete v9[0];
}
%NeverOptimizeFunction(main);
main();
