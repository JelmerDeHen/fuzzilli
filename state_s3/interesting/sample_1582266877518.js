function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = new Uint32Array(27576);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
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
