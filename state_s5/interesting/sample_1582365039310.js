function main() {
const v3 = RegExp("object");
// v3 = .object()
v3.valueOf = 1.7976931348623157e+308;
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v7(v8,v9) {
    let v12 = 0;
    delete v3.valueOf;
}
const v14 = v6.forEach(v7,"KQnpbKHug8");
// v14 = .undefined
}
%NeverOptimizeFunction(main);
main();
