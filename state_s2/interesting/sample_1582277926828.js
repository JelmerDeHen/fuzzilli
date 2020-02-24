function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
