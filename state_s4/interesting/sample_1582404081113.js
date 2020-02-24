function main() {
const v2 = {c:"function"};
// v2 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v5 = RegExp(v2);
// v5 = .object()
v5.valueOf = 1.7976931348623157e+308;
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v9(v10,v11) {
    delete v5.valueOf;
}
const v12 = v8.forEach(v9,"KQnpbKHug8");
// v12 = .undefined
}
%NeverOptimizeFunction(main);
main();
