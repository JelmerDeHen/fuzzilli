function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = RegExp("eeeRbEqfAO");
// v8 = .object()
const v11 = {constructor:"symbol",length:9007199254740993};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
v11.__proto__ = v8;
delete v11.length;
v11[65537] = "symbol";
}
%NeverOptimizeFunction(main);
main();
