function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {constructor:"symbol",length:9007199254740993};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v7 = "symbol".endsWith("symbol",9007199254740993);
// v7 = .boolean
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v9;
const v14 = {constructor:"symbol",length:Reflect};
// v14 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v17 = [1337,1337,1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v19 = v17 in v5;
// v19 = .boolean
}
%NeverOptimizeFunction(main);
main();
