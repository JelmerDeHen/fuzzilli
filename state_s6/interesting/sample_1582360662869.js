function main() {
const v3 = RegExp("object");
// v3 = .object()
v3.valueOf = 1.7976931348623157e+308;
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v7(v8,v9) {
    let v12 = 0;
    delete v3.valueOf;
}
const v14 = v6.forEach(v7,"KQnpbKHug8");
// v14 = .undefined
}
%NeverOptimizeFunction(main);
main();
