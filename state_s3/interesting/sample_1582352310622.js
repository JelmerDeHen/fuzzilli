function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [v4,"cUoQ2Cq+0j",ArrayBuffer,9007199254740992];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = new Uint8Array(v5);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "includes", "every", "reduceRight", "find", "filter", "lastIndexOf", "indexOf", "subarray", "join", "fill", "sort", "slice", "findIndex", "reverse", "forEach", "reduce", "values", "copyWithin", "entries", "keys", "set", "some"])
v8.constructor = Uint32Array;
const v11 = v8.slice(-9007199254740993,1337);
// v11 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "buffer", "length"], withMethods: ["keys", "reverse", "slice", "includes", "filter", "every", "find", "indexOf", "lastIndexOf", "entries", "join", "findIndex", "set", "values", "forEach", "subarray", "copyWithin", "reduceRight", "map", "reduce", "some", "sort", "fill"])
}
%NeverOptimizeFunction(main);
main();
