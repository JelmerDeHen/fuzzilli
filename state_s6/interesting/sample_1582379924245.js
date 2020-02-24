function main() {
const v3 = new ArrayBuffer(1337);
// v3 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v6 = [257,257,257];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v7 = 257;
const v8 = isFinite(v7);
// v8 = .boolean
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
v3.a = "object";
delete v3.a;
}
%NeverOptimizeFunction(main);
main();
