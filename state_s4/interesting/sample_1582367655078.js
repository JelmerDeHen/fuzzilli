function main() {
const v1 = {c:"function"};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v4 = RegExp(v1);
// v4 = .object()
v4.valueOf = 1.7976931348623157e+308;
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v8(v9,v10) {
    delete v4.valueOf;
}
const v11 = v7.forEach(v8,"KQnpbKHug8");
// v11 = .undefined
}
%NeverOptimizeFunction(main);
main();
