function main() {
const v1 = {c:"function"};
// v1 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v4 = RegExp(v1);
// v4 = .object()
v4.valueOf = 1.7976931348623157e+308;
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v8(v9,v10) {
    delete v4.valueOf;
}
const v11 = v7.forEach(v8,"KQnpbKHug8");
// v11 = .undefined
}
%NeverOptimizeFunction(main);
main();
