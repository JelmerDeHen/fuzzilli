function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v4(v5,v6) {
    v4.prototype = 1337;
    return v4;
}
const v8 = v4();
// v8 = .unknown
v8[1337] = 1337;
const v12 = {...v8};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
}
%NeverOptimizeFunction(main);
main();
