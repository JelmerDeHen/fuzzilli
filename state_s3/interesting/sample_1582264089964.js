function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [v3,471091797,DataView];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = new Float32Array(61010);
// v8 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
const v9 = {a:1337,e:1337,d:1337,valueOf:v5,...v8,...471091797,...1337};
// v9 = .object(ofGroup: Object, withProperties: ["byteOffset", "buffer", "__proto__", "valueOf", "a", "e", "length", "d", "constructor", "byteLength"], withMethods: ["reduce", "copyWithin", "find", "filter", "some", "keys", "indexOf", "reverse", "sort", "forEach", "subarray", "fill", "map", "includes", "lastIndexOf", "slice", "reduceRight", "findIndex", "values", "set", "entries", "join", "every"])
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
delete v9[0];
}
%NeverOptimizeFunction(main);
main();
