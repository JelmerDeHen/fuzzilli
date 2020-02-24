function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [v3,471091797,DataView];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = new Float32Array(61010);
// v8 = .object(ofGroup: Float32Array, withProperties: ["constructor", "length", "byteLength", "buffer", "byteOffset", "__proto__"], withMethods: ["values", "copyWithin", "find", "some", "subarray", "findIndex", "reduce", "indexOf", "includes", "forEach", "every", "join", "sort", "reverse", "keys", "entries", "slice", "fill", "map", "lastIndexOf", "filter", "set", "reduceRight"])
const v9 = {a:1337,e:1337,d:1337,valueOf:v5,...v8,...471091797,...1337};
// v9 = .object(ofGroup: Object, withProperties: ["a", "e", "__proto__", "length", "byteOffset", "byteLength", "constructor", "d", "valueOf", "buffer"], withMethods: ["find", "slice", "reduceRight", "includes", "every", "findIndex", "set", "forEach", "subarray", "lastIndexOf", "fill", "sort", "indexOf", "filter", "reverse", "reduce", "entries", "copyWithin", "join", "some", "values", "map", "keys"])
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
delete v9[0];
}
%NeverOptimizeFunction(main);
main();
