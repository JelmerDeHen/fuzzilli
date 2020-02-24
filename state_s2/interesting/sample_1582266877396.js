function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = new Uint32Array(27576);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
let v6 = 0;
const v7 = v1.__proto__;
// v7 = .object()
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = v4.set(v7,v6);
// v12 = .undefined
}
%NeverOptimizeFunction(main);
main();
