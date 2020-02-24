function main() {
const v3 = [4294967296];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
