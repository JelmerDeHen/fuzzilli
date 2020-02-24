function main() {
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v3 = Array(2815038421);
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = v2.__proto__;
// v4 = .object()
Object[-9007199254740992] = v4;
for (const v9 in Object) {
}
}
%NeverOptimizeFunction(main);
main();
