function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
let v12 = 0;
while (v12 < 10) {
    v5.length = 2147483648;
    const v14 = v12 + 1;
    // v14 = .primitive
    v12 = v14;
}
}
%NeverOptimizeFunction(main);
main();
