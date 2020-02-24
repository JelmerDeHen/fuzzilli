function main() {
const v1 = {c:"function"};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v4 = RegExp(v1);
// v4 = .object()
v4.valueOf = 1.7976931348623157e+308;
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v8(v9,v10) {
    delete v4.valueOf;
}
const v11 = v7.forEach(v8,"KQnpbKHug8");
// v11 = .undefined
}
%NeverOptimizeFunction(main);
main();
