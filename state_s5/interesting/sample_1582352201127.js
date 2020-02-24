function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [v4,"cUoQ2Cq+0j",ArrayBuffer,9007199254740992];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = new Uint8Array(v5);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["copyWithin", "filter", "reverse", "includes", "findIndex", "every", "subarray", "keys", "set", "some", "reduce", "reduceRight", "join", "sort", "indexOf", "entries", "forEach", "values", "lastIndexOf", "find", "slice", "fill", "map"])
v8.constructor = Uint32Array;
const v11 = v8.slice(-9007199254740993,1337);
// v11 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "length", "byteOffset", "byteLength", "__proto__", "buffer"], withMethods: ["some", "subarray", "lastIndexOf", "find", "filter", "findIndex", "slice", "indexOf", "map", "reduceRight", "join", "forEach", "every", "entries", "set", "copyWithin", "sort", "keys", "values", "reduce", "reverse", "includes", "fill"])
}
%NeverOptimizeFunction(main);
main();
