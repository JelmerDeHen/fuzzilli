function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v2 = v1[65536];
// v2 = .unknown
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v15 = [13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v17 = [v15,471091797,DataView];
// v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v20 = new Float32Array(61010);
// v20 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
const v21 = {a:1337,e:1337,d:1337,valueOf:v17,...v20,...471091797,...1337};
// v21 = .object(ofGroup: Object, withProperties: ["e", "length", "buffer", "byteLength", "d", "__proto__", "a", "constructor", "byteOffset", "valueOf"], withMethods: ["subarray", "lastIndexOf", "indexOf", "every", "sort", "set", "keys", "forEach", "map", "reverse", "fill", "filter", "some", "join", "find", "reduceRight", "copyWithin", "entries", "findIndex", "includes", "reduce", "values", "slice"])
const v23 = gc();
// v23 = .undefined
}
%NeverOptimizeFunction(main);
main();
