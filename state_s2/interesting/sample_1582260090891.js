function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {toString:v2,b:"PI",valueOf:v4};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "valueOf", "b"])
const v6 = {b:v5};
// v6 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v7 = v6.__proto__;
// v7 = .object()
let v8 = v5;
v7[984635998] = v8;
const v13 = new Uint16Array(14656);
// v13 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
Array.__proto__ = v13;
for (const v14 in Array) {
}
}
%NeverOptimizeFunction(main);
main();
