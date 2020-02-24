function main() {
const v1 = {c:"function"};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v4 = RegExp(v1);
// v4 = .object()
v4.valueOf = 1.7976931348623157e+308;
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v8(v9,v10) {
    delete v4.valueOf;
}
const v11 = v7.forEach(v8,"KQnpbKHug8");
// v11 = .undefined
}
%NeverOptimizeFunction(main);
main();
