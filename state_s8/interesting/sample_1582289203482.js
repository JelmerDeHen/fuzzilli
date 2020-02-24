function main() {
const v2 = [-9007199254740992,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v4 = 1337;
const v6 = v2.unscopables;
// v6 = .unknown
const v7 = Object[v6];
// v7 = .unknown
try {
    const v8 = Object.defineProperties(v4,v7);
    // v8 = .undefined
} catch(v9) {
}
}
%NeverOptimizeFunction(main);
main();
