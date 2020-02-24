function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [v3,471091797,DataView];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = new Float32Array(61010);
// v8 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
const v9 = {a:1337,e:1337,d:1337,valueOf:v5,...v8,...471091797,...1337};
// v9 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "buffer", "a", "e", "constructor", "valueOf", "byteLength", "length", "byteOffset"], withMethods: ["fill", "map", "every", "slice", "entries", "indexOf", "reverse", "forEach", "set", "subarray", "values", "some", "join", "findIndex", "sort", "reduce", "find", "filter", "lastIndexOf", "copyWithin", "keys", "includes", "reduceRight"])
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
delete v9[0];
}
%NeverOptimizeFunction(main);
main();
