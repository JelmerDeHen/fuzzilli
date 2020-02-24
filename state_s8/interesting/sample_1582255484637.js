function main() {
const v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [13.37,13.37,-4294967297,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = {length:v6,constructor:Uint8Array};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v8 = {toString:Uint8Array,e:"boolean",constructor:v5,valueOf:v7,length:v6};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "toString", "__proto__", "length", "e"])
const v12 = 1 === "pvU0UUjoya";
// v12 = .boolean
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
v8.toString = Array;
}
%NeverOptimizeFunction(main);
main();
