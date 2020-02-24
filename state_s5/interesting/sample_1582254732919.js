function main() {
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v3 = Array(2815038421);
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = v2.__proto__;
// v4 = .object()
Object[-9007199254740992] = v4;
for (const v9 in Object) {
}
}
%NeverOptimizeFunction(main);
main();
