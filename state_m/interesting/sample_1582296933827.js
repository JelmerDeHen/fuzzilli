function main() {
const v2 = [-9007199254740992,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
