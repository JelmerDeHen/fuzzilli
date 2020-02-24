function main() {
const v6 = [-4096,-4096];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
