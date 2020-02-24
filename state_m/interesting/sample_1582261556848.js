function main() {
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
const v10 = [1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v11 = v10;
let v13 = undefined;
let v18 = 0;
let v21 = 0;
delete v11[v18];
const v22 = new Uint8Array(v10);
// v22 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
v7 = v8;
}
%NeverOptimizeFunction(main);
main();
