function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = RegExp("eeeRbEqfAO");
// v8 = .object()
const v11 = {constructor:"symbol",length:9007199254740993};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
v11.__proto__ = v8;
delete v11.length;
v11[65537] = "symbol";
}
%NeverOptimizeFunction(main);
main();
