function main() {
const v3 = new ArrayBuffer(1337);
// v3 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v6 = [257,257,257];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
