function main() {
const v3 = RegExp("object");
// v3 = .object()
v3.valueOf = 1.7976931348623157e+308;
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v7(v8,v9) {
    let v12 = 0;
    delete v3.valueOf;
}
const v14 = v6.forEach(v7,"KQnpbKHug8");
// v14 = .undefined
}
%NeverOptimizeFunction(main);
main();
