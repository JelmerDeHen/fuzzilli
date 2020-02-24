function main() {
const v3 = RegExp("object");
// v3 = .object()
v3.valueOf = 1.7976931348623157e+308;
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v7(v8,v9) {
    let v12 = 0;
    delete v3.valueOf;
}
const v14 = v6.forEach(v7,"KQnpbKHug8");
// v14 = .undefined
}
%NeverOptimizeFunction(main);
main();
