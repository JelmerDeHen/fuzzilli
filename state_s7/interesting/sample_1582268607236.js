function main() {
const v3 = [4294967296];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {length:13.37,a:gc,constructor:gc};
// v4 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["constructor", "a"])
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
