function main() {
const v3 = [4294967296];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
