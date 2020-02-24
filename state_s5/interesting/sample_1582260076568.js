function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {toString:v2,b:"PI",valueOf:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "b", "toString"])
const v6 = {b:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v7 = v6.__proto__;
// v7 = .object()
let v8 = v5;
v7[984635998] = v8;
const v13 = new Uint16Array(14656);
// v13 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
Array.__proto__ = v13;
for (const v14 in Array) {
}
}
%NeverOptimizeFunction(main);
main();
