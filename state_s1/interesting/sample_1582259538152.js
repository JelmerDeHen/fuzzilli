function main() {
const v4 = new Uint16Array(14656);
// v4 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
let v10 = 0;
Array.__proto__ = v4;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
let v14 = 0;
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v19 = v14 + 1;
// v19 = .primitive
v14 = v19;
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
for (const v24 in Array) {
}
}
%NeverOptimizeFunction(main);
main();
