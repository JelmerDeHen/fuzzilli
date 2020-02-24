function main() {
const v2 = [-9007199254740992,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v4 = 1337;
const v6 = v2.unscopables;
// v6 = .unknown
const v7 = Object[v6];
// v7 = .unknown
try {
    const v8 = Object.create(v4,v7);
    // v8 = .object()
} catch(v9) {
}
}
%NeverOptimizeFunction(main);
main();
