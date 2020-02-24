function main() {
const v3 = RegExp("object");
// v3 = .object()
v3.valueOf = 1.7976931348623157e+308;
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v7(v8,v9) {
    let v12 = 0;
    delete v3.valueOf;
}
const v14 = v6.forEach(v7,"KQnpbKHug8");
// v14 = .undefined
}
%NeverOptimizeFunction(main);
main();
