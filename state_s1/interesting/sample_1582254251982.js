function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v6 = [13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
for (const v8 in "object") {
    for (const v10 in "replace") {
    }
}
const v12 = Symbol.replace;
// v12 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v13 = v6[v12];
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();
