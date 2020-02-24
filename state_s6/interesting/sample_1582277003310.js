function main() {
const v6 = [-4096,-4096];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
v6[5] = 500915904;
let v9 = 0;
while (v9 < 3) {
    const v10 = v6.shift();
    // v10 = .unknown
    const v11 = v9 + 1;
    // v11 = .primitive
    v9 = v11;
}
}
%NeverOptimizeFunction(main);
main();
