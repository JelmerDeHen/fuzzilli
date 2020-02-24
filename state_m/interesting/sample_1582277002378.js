function main() {
const v6 = [-4096,-4096];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
