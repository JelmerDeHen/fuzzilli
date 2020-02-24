function main() {
const v3 = ["a",-9007199254740992,-9007199254740992];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {constructor:"symbol",length:9007199254740993};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
const v7 = v3.indexOf(RegExp,v6);
// v7 = .integer
}
%NeverOptimizeFunction(main);
main();
