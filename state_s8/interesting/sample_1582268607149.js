function main() {
const v3 = [4294967296];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {length:13.37,a:gc,constructor:gc};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["constructor", "a"])
function v5(v6,v7) {
    v5.prototype = 1337;
    return v5;
}
const v9 = v5();
// v9 = .unknown
const v10 = new v9(4294967296,v4,v3);
// v10 = .object()
}
%NeverOptimizeFunction(main);
main();
