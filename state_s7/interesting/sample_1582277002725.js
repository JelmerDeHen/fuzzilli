function main() {
const v6 = [-4096,-4096];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
