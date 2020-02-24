function main() {
const v2 = [-9007199254740992,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
