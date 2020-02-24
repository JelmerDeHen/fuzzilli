function main() {
let v3 = 0;
const v6 = new Int16Array(1.0);
// v6 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
const v7 = v3 + 1;
// v7 = .primitive
v3 = v7;
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = v6.__proto__;
// v12 = .object()
v12.a = -2477193724;
}
%NeverOptimizeFunction(main);
main();
