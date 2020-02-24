function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = RegExp("eeeRbEqfAO");
// v8 = .object()
const v11 = {constructor:"symbol",length:9007199254740993};
// v11 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
v11.__proto__ = v8;
delete v11.length;
v11[65537] = "symbol";
}
%NeverOptimizeFunction(main);
main();
