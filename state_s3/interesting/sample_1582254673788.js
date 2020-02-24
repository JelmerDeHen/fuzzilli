function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = v5.reduceRight(gc,13.37);
// v8 = .unknown
try {
    const v10 = v8.substring(1337,1337);
    // v10 = .unknown
} catch(v11) {
}
const v13 = typeof 0;
// v13 = .string
}
%NeverOptimizeFunction(main);
main();
